import React, { useEffect, useLayoutEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
	BlurMarginSC,
	ButtonSC,
	DivAllLoaderBoxSC,
	DivAuctionEndSC,
	DivBoxBoxTimerSC,
	DivBoxHomeSC,
	DivBoxInfoGoldSC,
	DivBoxInfoGraySC,
	DivBoxRowsSC,
	DivButtonBoxSC,
	DivLoaderBoxSC,
	DivPlaneContainerSC,
	DivTextHisSC,
	DivTextInfoSC,
	DivTextOperated,
	DivTextPlane,
	DivTextTimerSC,
	ImgPlaneSC3,
	LinkBackSC,
	LinkSolidYellowSC,
} from "./style";
import { MoonLoader } from "react-spinners";
import Countdown from "../countdown";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
	orderBy,
	limitToLast,
	getDoc,
	doc,
} from "firebase/firestore";
import {
	getDownloadURL,
	getStorage,
	listAll,
	ref,
	getMetadata,
} from "firebase/storage";
import { async } from "ramda-adjunct";
const storage = getStorage();

const PlaneInfo = (props) => {
	const [auction, setAuction] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isActive, setIsActive] = useState(true);

	const [bids, setBids] = useState();
	const navigate = useNavigate();
	let { auction_id } = useParams();

	const db = getFirestore();

	const getBids = async () => {
		let _bids = [];

		const q = query(
			collection(db, `auctions/${auction_id}/bids`),
			orderBy("bid_amount"),
			limitToLast(3)
		);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach( (_doc) => {

			let _data = _doc.data()


			// const docRef = doc(db,`users/${_data.user_id}`);
			// const docSnap = await getDoc(docRef);
			// let _data2 = docSnap.data()
			// console.log('><>>>>>>', _data2)

			_bids.unshift(_doc.data());
		});
		setBids(_bids);
	};

	useLayoutEffect(() => {
		getData();
		getBids();
	}, []);

	const getData = async () => {
		let _allData = [];
		const auctionRef = doc(db, "auctions", `${auction_id}`);
		const auctionSnap = await getDoc(auctionRef);
		let _endTime = + new Date(auctionSnap.data().end_time.toDate());
		let _now = + new Date();
		let _interval = _endTime - _now;
		if (_interval <= 0) {
			setIsActive(false);
		} else {

			setTimeout(() => {
				// getData();
				// getBids();
				setIsActive(false);
				// navigation(-1)
				console.log('kek');
			}, _interval);
		}

		if (auctionSnap.exists()) {
			// console.log("Document data:", auctionSnap.data().flight_id, auctionSnap.id);
			const flightRef = doc(
				db,
				"flights",
				`${auctionSnap.data().flight_id}`
			);
			const flightSnap = await getDoc(flightRef);
			let _aircraftImage;

			if (flightSnap.exists()) {
				// console.log("Document data:", auctionSnap.data().flight_id, auctionSnap.id);
				_aircraftImage = flightSnap.data().aircraft_image;
				let _aircraftRef = ref(
					storage,
					`tour-info/${flightSnap.data().aircraft_image}`
				);
				await listAll(_aircraftRef)
					.then((res) => {
						res.prefixes.forEach((folderRef) => {
							// All the prefixes under listRef.
							// You may call listAll() recursively on them.
						});
						res.items.forEach(async (itemRef, i) => {
							let file_name;
							// All the items under listRef.
							// let path = itemRef.fullPath;

							await getDownloadURL(ref(storage, itemRef.fullPath))
								.then((url) => {
									getMetadata(itemRef)
										.then((metadata) => {
											// Metadata now contains the metadata for 'images/forest.jpg'
											let fileName = metadata.name;
											let fileNameDevision =
												/^[^.]+/.exec(fileName)[0];
											if (
												fileNameDevision ===
												_aircraftImage
											) {
												_allData.push({
													auction_id,
													auction: auctionSnap.data(),
													flight: flightSnap.data(),
													aircraft_image: url,
												});
												console.log(
													"_allData",
													_allData
												);
												setAuction(_allData);
												setLoading(false);
												// console.log('_aircraftUrl', _aircraftUrl);
											}
										})
										.catch((error) => {
											// Uh-oh, an error occurred!
										});

									// `url` is the download URL for 'images/stars.jpg'
									// This can be downloaded directly:
								})
								.catch((error) => {
									// Handle any errors
								});
						});
					})
					.catch((error) => {
						// Uh-oh, an error occurred!
					});
			} else {
				// doc.data() will be undefined in this case
				console.log("No such flight!");
			}
		} else {
			// doc.data() will be undefined in this case
			console.log("No such auction!");
		}
	};

	const arrayFirstSelect = [
		"Miami-NYC, Dec. 7th",
		"Miami-Cancun, Dec. 14-19",
		"Miami-Bahamas, Jan. 6-10",
	];

	const navigation = (to) => {
		navigate(to);
	};



	//added by Baraka
	const [product, setProduct] = useState({});

	useEffect(() => {
		setProduct({
			name: auction[0]?.flight?.aircraft,
			description: auction[0]?.flight?.aircraft_class,
			//change to auction.auction.highest_bid (dynamic price)
			amount: auction[0]?.auction?.buy_now.price*100,
			currency: 'usd',
			quantity: 1,
		})
	}, [auction])
	//change this to main api link
	const API = 'https://cyberzen-labs-stripe-payments-cwgu.onrender.com';
	// const API = 'http://localhost:3333';

	async function fetchFromAPI(endpointURL, opts) {

		const { method, body } = { method: 'POST', body: null, ...opts };
		console.log({ line_items: [product] })
		try {
			const res = await fetch(`${API}/${endpointURL}`, {
				method,
				...(body && { body: JSON.stringify(body) }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			return res.json();
		}
		catch (err) {
			console.log(err)
		}

	}

	const makePayment = async (e) => {
		e.preventDefault()
		const body = { line_items: [product] }
		// setLoading(true)
		const { id: sessionId, url: sessionUrl } = await fetchFromAPI('checkouts', {
			body
		});

		// setLoading(false)

		console.log(sessionUrl)
		window.location = sessionUrl

	};



	const auctionData = auction.map((auction, i) => {
		return (
			<>
				<>
					<DivTextInfoSC key={`cheburek${i}`}>
						{auction.flight.info}
					</DivTextInfoSC>

					<DivTextPlane>{auction.flight.aircraft}</DivTextPlane>
					<ImgPlaneSC3 Photo={auction.aircraft_image} />
					<DivTextPlane>
						{auction.flight.origin +
							" - " +
							auction.flight.destination}
					</DivTextPlane>
					<DivTextOperated>Operated by: Jet Luxe</DivTextOperated>

					<DivBoxBoxTimerSC>
						{/* <Timer deadline={auction.auction.end_time} /> */}
						{isActive ? (
							<>
								<div
									style={{
										width: "fit-content",
										height: "15px",
										fontFamily: "Inter",
										fontStyle: "normal",
										fontWeight: 400,
										fontSize: "12px",
										lineWeight: "15px",
										color: "#E8E8E8",
									}}
								>
									Bidding Closes:
								</div>
								<Countdown
									deadline={
										auction.auction.end_time.toDate
											? moment(
												auction.auction.end_time.toDate()
											).toISOString()
											: auction.auction.end_time
									}
								/>
							</>
						) : (
							<DivAuctionEndSC>Аuction ended</DivAuctionEndSC>
						)}
					</DivBoxBoxTimerSC>
					<DivBoxInfoGoldSC>
						<div
							style={{
								marginLeft: "12px",
							}}
						>
							Current highest bid
						</div>{" "}
						<div
							style={{
								marginRight: "12px",
							}}
						>
							${auction.auction.highest_bid}
						</div>
					</DivBoxInfoGoldSC>

					{
						auction.auction.type === 'buy_now and auction' &&
						<DivBoxInfoGoldSC>
							<div
								style={{
									marginLeft: "12px",
								}}
							>
								Buy now price
							</div>{" "}
							<div
								style={{
									marginRight: "12px",
								}}
							>
								${auction.auction.buy_now.price}
							</div>
						</DivBoxInfoGoldSC>
					}

					<DivBoxInfoGraySC>
						<div
							style={{
								marginLeft: "12px",
							}}
						>
							Number of bids
						</div>
						<div
							style={{
								marginRight: "12px",
							}}
						>
							{auction.auction.bid_count}
						</div>
					</DivBoxInfoGraySC>
					<div>
						<DivBoxInfoGraySC>
							<div
								style={{
									marginLeft: "12px",
								}}
							>
								Starting bid
							</div>
							<div
								style={{
									marginRight: "12px",
								}}
							>
								${auction.auction.start_bid}
							</div>
						</DivBoxInfoGraySC>
						<div
							style={{
								display: "grid",
								justifyContent: "end",
							}}
						>
							<DivTextTimerSC>
								(Plus applicable VAT)
							</DivTextTimerSC>
						</div>
					</div>
					<DivTextHisSC>History of bids</DivTextHisSC>
					{bids != undefined ? (
						bids.map((bid, i) => (
							<DivBoxInfoGraySC key={`kekich${i}`}>
								<div
									style={{
										marginLeft: "12px",
									}}
								>
									{i + 1}. Anonymous bidder
								</div>
								<div
									style={{
										marginRight: "12px",
									}}
								>
									${bid.bid_amount}
								</div>
							</DivBoxInfoGraySC>
						))
					) : (
						<DivLoaderBoxSC>
							<MoonLoader
								color="#edb935"
								loading
								speedMultiplier={0.7}
								size={40}
							/>
						</DivLoaderBoxSC>
					)}
				</>
				
				<ButtonSC to={`/tour-info/${auction.auction.flight_id}`}>
					View flight information
				</ButtonSC>
				{
						auction.auction.type === 'buy_now and auction' &&
						<div style={{marginBottom: "-2px",
							marginTop: "8px"}}>
						<LinkSolidYellowSC
							// to={`/auctions/${auction.auction_id}/bid`}
							disabled={!isActive}
							onClick={(e) => { makePayment(e) }}
						>
							Buy Now
						</LinkSolidYellowSC>
						</div>
					}
				<DivButtonBoxSC>
					<LinkBackSC onClick={() => navigation(-1)}>
						<FiArrowLeft />
						Back
					</LinkBackSC>
					<LinkSolidYellowSC
						// to={`/auctions/${auction.auction_id}/bid`}
						disabled={!isActive}
						onClick={() =>
							navigation(`/auctions/${auction.auction_id}/bid`)
						}
					>
						Go to Action
					</LinkSolidYellowSC>
					
				</DivButtonBoxSC>
			</>
		);
	});

	return (
		<>
			{loading ? (
				<DivAllLoaderBoxSC>
					<MoonLoader
						color="#edb935"
						loading
						speedMultiplier={0.7}
						size={40}
					/>
				</DivAllLoaderBoxSC>
			) : (
				<DivPlaneContainerSC>
					<DivBoxHomeSC>
						<BlurMarginSC>
							<DivBoxRowsSC>{auctionData}</DivBoxRowsSC>
						</BlurMarginSC>
					</DivBoxHomeSC>
				</DivPlaneContainerSC>
			)}
		</>
	);
};

export default PlaneInfo;
