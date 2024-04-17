import {
	addDoc,
	collection,
	getDocs,
	getFirestore,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
	getDoc,
	doc
} from 'firebase/firestore'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

import { FiArrowLeft } from "react-icons/fi";
import moment from "moment";
import { add, head, path, propEq } from "ramda";
import { propNotEq } from "ramda-adjunct";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	concatAll,
	filter,
	first,
	from,
	map,
	pluck,
	race,
	scan,
	switchMap,
	tap,
} from "rxjs";
import Logger from "../../plugins/Logger$";
import useTopics from "../../plugins/useTopics";
import { PrimaryButton2 } from "../common/style";
import Countdown from "../countdown";
import {
	DivBind,
	DivBoxInfoGraySC,
	DivContentSC,
	DivSectionTimer,
	DivTextInfoSC,
	DivTimeEndSC,
	DivBoxInputGray2SC,
	ButtonPlusSC,
	PrimaryButtonDisable,
	LinkBackSC,
	DivLoaderBoxSC,
} from "./style.js";
import minus from "../../img/svg/minus.svg";
import plus from "../../img/svg/plus.svg";
import { MoonLoader } from "react-spinners";
import GlobalDispatchContext from "../../global_dispatch_context";
const AddBid = () => {
	const { state, dispatch } = useContext(GlobalDispatchContext);
	const { IsNewNotification } = state;
	const { Topic, Message } = useTopics;

	let { auction_id } = useParams();
	const navigate = useNavigate();

	const [auction, setAuction] = useState({
		uid: null,
		start_bid: null,
		highest_bid: null,
		bid_count: null,
		bid_step: null,
		end_time: {
			toDate: null,
		},
	});
	const [bidAmount, setBidAmount] = useState(0);
	const [balance, setBalance] = useState(0);
	const [loading, setLoading] = useState(false);
	const [isActive, setIsActive] = useState(true);
	const [normalBid, setNormalBid] = useState(true);
	const [endTime, setEndTime] = useState(false);
	function inpNum(e) {
		e = e || window.event;
		var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
		var charStr = String.fromCharCode(charCode);
		if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
	}
	const CheckBid = (bid_amount) => {
		if (bid_amount >= add(auction.highest_bid, auction.bid_step)) {
			setBidAmount(bid_amount);
			setNormalBid(true);
		} else if (bid_amount < add(auction.highest_bid, auction.bid_step)) {
			setBidAmount(bid_amount);
			setNormalBid(false);
		}

		// console.log(bid_amount);
		// console.log(auction.highest_bid);
	};
	const decrementBidAmount = () => {
		if (bidAmount >= add(auction.highest_bid, auction.bid_step)) {
			let bid_amount = +bidAmount + +auction.bid_step;

			setBidAmount(bid_amount);
		} else {
			setBidAmount(auction.highest_bid + +auction.bid_step);
		}
	};
	const incrementBidAmount = () => {
		let NewBidAmount = bidAmount;
		if (NewBidAmount > add(auction.highest_bid, auction.bid_step)) {
			let NewBidAmount = bidAmount - auction.bid_step;
			setBidAmount(NewBidAmount);
		} else {
			setBidAmount(auction.highest_bid + +auction.bid_step);
		}
	};

	const checkActive = () => {
		let _auction = auction;
		let _end_time = auction.end_time.toDate;

		if (_end_time) {
			let _now = +new Date().getTime();
			// let _endTime = +auction.end_time;
			let _endTime = new Date(
				auction.end_time.toDate()
			).getTime();
			let interval = _endTime - _now
			if (interval >= 0) {
				setTimeout(() => {
					setEndTime(true)
				}, interval)
			} else {
				setEndTime(true)
			}
			// let gettime = new Date(interval).getDay()
			// console.log("_endTime", _endTime);
			// console.log("_now", _now);
			// console.log("interval", interval);
			// console.log("gettime", gettime);


		} else {
			console.log("otstoi");
		}
	};


	useEffect(() => {
		Topic("firestore", "payments:latest")
			.pipe(concatAll())
			.pipe(pluck("payments"))
			.pipe(map(head))
			.pipe(map(path(["value", "local", "amount"])))
			.pipe(scan((acc, curr) => add(acc, curr), 0))
			.pipe(tap(setBalance))
			.subscribe(Logger("Payments"));

		Topic("firestore", "auctions:latest")
			.pipe(concatAll())
			.pipe(filter(propEq("uid", auction_id)))
			.pipe(tap(setAuction))
			.pipe(tap((e) => setBidAmount(add(e.highest_bid, e.bid_step))))
			.pipe(
				switchMap(() =>
					Topic("firestore", "auctions:live")
						.pipe(filter(propEq("uid", auction_id)))
						.pipe(tap(setAuction))
						.pipe(
							tap((e) =>
								setBidAmount(add(e.highest_bid, e.bid_step))
							)
						)
				)
			)
			.pipe(tap(() => setLoading(false)))
			.subscribe(Logger("Auction live"));

		const getNotifications = async () => {
			try {
				const docRef = doc(getFirestore(), `auctions/${auction_id}`);
				const docSnap = await getDoc(docRef);
				let _data = docSnap.data();
				setBidAmount(add(_data.highest_bid, _data.bid_step));
				setAuction(_data);
			} catch (error) {
				console.log("Error: ", error.message);
			}
		};

		getNotifications();
	}, []);

	useEffect(() => {
		checkActive();
	}, [auction])

	const AddBid = async () => {
		setLoading(true);

		let userName = 'Anonymous bidder'
		const docRef = doc(getFirestore(),`users/${getAuth().currentUser.uid}/profiles/latest`);
		const docSnap = await getDoc(docRef);
		let _data = docSnap.data()
		console.log('><>>><', _data.user_name)

		if (_data.user_name && _data.user_name !== '') {
			userName = _data.user_name
		}

		const result$ = Topic("firestore", "notifications:live").pipe(
			filter(propEq("topic", "auction"))
		);

		race(
			result$
				.pipe(filter(propNotEq("subject", "accepted")))
				.pipe(filter(propNotEq("subject", "outbid")))
				.pipe(
					tap(() =>
						dispatch({
							type: "SET_IS_NEW_NOTIFICATION",
							status: true,
						})
					)
				)
				.pipe(tap(() => console.log(IsNewNotification)))
				.pipe(tap(() => setLoading(false))), //TODO: Remove prod
			result$.pipe(filter(propEq("subject", "accepted")))
		)
			.pipe(first())
			.pipe(pluck("message"))
			.pipe(tap(Message("toast", "show")))
			.subscribe(Logger("Auction notifications"));

		Topic("firebase", "user:uid")
			.pipe(
				map( (uid) => {

						return collection(
							getFirestore(),
							'users',
							uid,
							'auctions',
							auction_id,
							'bids'
						)
					}
				)
			)
			.pipe(
				switchMap((col) => {
						from(
							addDoc(col, {
								bid_amount: parseInt(bidAmount),
								timestamp: serverTimestamp()
							})
						)
					}
				)
			)
			.subscribe(Logger("Bid"));
	};
	// console.log(moment(auction.end_time));

	return (
		<>
			{loading === true ? (
				<DivLoaderBoxSC>
					<MoonLoader
						color="#edb935"
						loading
						speedMultiplier={0.7}
						size={40}
					/>
				</DivLoaderBoxSC>
			) : (
				<DivContentSC>
					<DivSectionTimer>
						{/* <DivTimeEndSC>
							Time before the auction finishes
						</DivTimeEndSC> */}
						{/* {auction.uid ? (
							<Countdown
								deadline={
									auction.end_time.toDate
										? moment(
												auction.end_time.toDate()
										  ).toISOString()
										: auction.end_time
								}
							/>
						) : null} */}
					</DivSectionTimer>
					<DivBind>
						{/* 						<DivTextInfoSC>
							Final price includes: Winning Bid + segment fees
							($19.70 per passenger for International, $4.50 for
							domestic) + Applicable VAT (7.5% for domestic
							flights, 0% for International)
						</DivTextInfoSC> */}

						<DivBoxInfoGraySC>
							<div
								style={{
									marginLeft: "12px",
								}}
							>
								Current bid
							</div>
							<div
								style={{
									marginRight: "12px",
								}}
							>
								${auction.highest_bid}
							</div>
						</DivBoxInfoGraySC>
						<DivBoxInfoGraySC>
							<div
								style={{
									marginLeft: "12px",
								}}
							>
								Bid step
							</div>
							<div
								style={{
									marginRight: "12px",
								}}
							>
								${auction.bid_step}
							</div>
						</DivBoxInfoGraySC>

						<DivBoxInfoGraySC>
							<div
								style={{
									marginLeft: "12px",
								}}
							>
								Number of Bids:
							</div>
							<div
								style={{
									marginRight: "12px",
								}}
							>
								{auction.bid_count}
							</div>
						</DivBoxInfoGraySC>

						<div style={{ display: "flex", gap: "10px" }}>
							<DivBoxInputGray2SC
								onKeyPress={inpNum}
								placeholder="Amount"
								type="number"
								value={bidAmount}
								onChange={(e) => CheckBid(e.target.value)}
							/>
							{normalBid ? (
								<>
									<ButtonPlusSC
										Img={minus}
										onClick={incrementBidAmount}
										isEnabled={true}
									></ButtonPlusSC>
									<ButtonPlusSC
										Img={plus}
										onClick={decrementBidAmount}
										isEnabled={true}
									></ButtonPlusSC>
								</>
							) : (
								<>
									<ButtonPlusSC
										Img={minus}
										isEnabled={false}
									></ButtonPlusSC>
									<ButtonPlusSC
										Img={plus}
										isEnabled={false}
									></ButtonPlusSC>
								</>
							)}
						</div>
						{!loading ? (
							<>
								{normalBid ? (
									<PrimaryButton2
										isEnabled="true"
										onClick={AddBid}
										disabled={endTime}
									>
										{
											endTime ? 'Auction ended' : 'Add Bid'
										}
									</PrimaryButton2>
								) : (
									<PrimaryButton2 isEnabled={false}>
										Cannot bet less than the current bid
									</PrimaryButton2>
								)}
							</>
						) : (
							<PrimaryButton2 isEnabled={false} disabled={true}>
								loading please wait
							</PrimaryButton2>
						)}
						<LinkBackSC onClick={() => navigate(-1)}>
							<FiArrowLeft size={14} />
							Back
						</LinkBackSC>
					</DivBind>
				</DivContentSC>
			)}
		</>
	);
};

export default AddBid;
