import moment from "moment";
import { async, isNotNull } from "ramda-adjunct";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { combineLatest, first, map } from "rxjs";
import Logger from "../../plugins/Logger$";
import useTopics from "../../plugins/useTopics";
import { PrimaryButton, PrimaryButtonOutline } from "../common/style";
import Countdown from "../countdown";
import {
	DivBackButtonSC,
	DivContainerSC,
	DivDatePointSC,
	DivHighestBidSC,
	DivItemValueSC,
	DivLoaderBoxSC,
	DivMPBoxSC,
	DivNotActionsSC,
	DivPlaneItemSC,
	DivPlaneItemsSC,
	DivPlanePhotoBoxSC,
	DivTimerBoxSC,
	H1NotActionsSC,
	PCurrentHighestBidSC,
	PPlacePoinSC,
} from "./style";
import {
	getDownloadURL,
	getStorage,
	listAll,
	ref,
	getMetadata,
} from "firebase/storage";
import { MoonLoader } from "react-spinners";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
	orderBy,
	limit,
	limitToLast,
	doc,
	getDoc,
} from "firebase/firestore";
const storage = getStorage();

const ListAuction = () => {
	const [auctions, setAuctions] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const onTemp = async () => {
			await getDataFlights(setAuctions);
			// setLoading(false);
		};
		onTemp();
	}, []);

	const checkActiveAuction = () => {
		try {
			getDataFlights(setAuctions);
		} catch (error) {
			console.log("error:", error.message);
		}
	};

	const getDataFlights = async (_setAuctions) => {
		try {
			let _dataAuctions = [];

			const _auctionDocs = query(
				collection(getFirestore(), "auctions"),
				where("is_active", "==", true)
			);
			const _bidOnlyDocs = query(
				collection(getFirestore(), "auctions"),
				where("type", "==", 'bid_only')
			);
			const _auctionDocsData = await getDocs(_auctionDocs);
			// console.log("><>>>>>", _auctionDocsData.docs.length);
			if (_auctionDocsData.docs.length === 0) {
				setLoading(false);
				return;
			}
			if (_auctionDocsData) {
				_auctionDocsData.forEach(async (_auction) => {
					const _flightDoc = query(
						doc(
							getFirestore(),
							"flights",
							`${_auction.data().flight_id}`
						)
					);
					const _flightSnap = await getDoc(_flightDoc);
					let _aircraftImageRef = ref(
						storage,
						`tour-info/${_flightSnap.data().aircraft_image}`
					);

					await listAll(_aircraftImageRef)
						.then(async (res) => {
							res.prefixes.forEach((folderRef) => {
								// All the prefixes under listRef.
								// You may call listAll() recursively on them.
							});
							for (const itemRef of res.items) {
								// const i = res.items.indexOf(itemRef);

								await getDownloadURL(
									ref(storage, itemRef.fullPath)
								)
									.then(async (url) => {
										await getMetadata(itemRef)
											.then((metadata) => {
												// Metadata now contains the metadata for 'images/forest.jpg'
												// let _aircraftImages = JSON.parse(JSON.stringify(aircraftImage))
												let file_name =
													metadata.name.split(".")[0];
												let aircraft_name =
													_flightSnap.data()
														.aircraft_image;
												if (
													file_name === aircraft_name
												) {
													_dataAuctions.push({
														auction_id: _auction.id,
														flight_id:
															_auction.data()
																.flight_id,
														auction:
															_auction.data(),
														flight: _flightSnap.data(),
														aircraft_image: url,
													});
												}
											})
											.catch((error) => {
												// Uh-oh, an error occurred!
											});
									})
									.catch((error) => {
										// Handle any errors
									});
							}
							// _setAuctions(_dataAuctions);
							// setLoading(false);
							// setAuctions(_dataAuctions)
						})
						.catch((error) => {
							// Uh-oh, an error occurred!
						});
					let _now = new Date().getTime();
					let _endTime = new Date(
						_auction.data().end_time.toDate()
					).getTime();
					let _interval = _endTime - _now;
					setTimeout(() => {
						setLoading(true);
						checkActiveAuction();
					}, _interval);
					console.log('><>>>>>><<<')
					setLoading(false);
					setAuctions(_dataAuctions)
				});

			} else {
				console.log("not work");
			}
		} catch (e) {
			console.log(e);
		}
	};

	console.log("auctions", auctions);

	const list_auctions = auctions.map((auction, i) => {
		// checkActiveAuction(auction.auction.end_time);
		return (
			<DivPlaneItemSC key={auction.auction_id}>
				<DivItemValueSC>
					<DivDatePointSC>
						<PPlacePoinSC size={16}>
							{auction.flight.origin} &ndash;{" "}
							{auction.flight.destination}
						</PPlacePoinSC>
						<PPlacePoinSC size={14} weight={400}>
							{auction.flight.info}
						</PPlacePoinSC>
					</DivDatePointSC>
					<DivTimerBoxSC>
						<div
							style={{
								width: "100%",
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
					</DivTimerBoxSC>
					{
						auction.auction.type==='buy_now and auction'&&
						<DivHighestBidSC>
							<PCurrentHighestBidSC>
								Buy now price
							</PCurrentHighestBidSC>
							<PCurrentHighestBidSC>
								${auction.auction.buy_now.price}
							</PCurrentHighestBidSC>
						</DivHighestBidSC>
					}
					<DivHighestBidSC>
						<PCurrentHighestBidSC>
							Current highest bid
						</PCurrentHighestBidSC>
						<PCurrentHighestBidSC>
							${auction.auction.highest_bid}
						</PCurrentHighestBidSC>
					</DivHighestBidSC>
					<DivPlanePhotoBoxSC urlPhoto={auction.aircraft_image} />
					<Link to={`/plane-info/${auction.auction_id}`}>
						<PrimaryButton isEnabled="true">
							View more details
						</PrimaryButton>
					</Link>
				</DivItemValueSC>
			</DivPlaneItemSC>
		);
	});

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
				<DivContainerSC>
					<DivMPBoxSC>
						{auctions.length !== 0 ? (
							<DivPlaneItemsSC>{list_auctions}</DivPlaneItemsSC>
						) : (
							<DivNotActionsSC>
								<H1NotActionsSC>No auctions yet</H1NotActionsSC>
							</DivNotActionsSC>
						)}
						<DivBackButtonSC>
							<Link to={"/"}>
								<PrimaryButtonOutline isEnabled="false">
									<FiArrowLeft />
									Back
								</PrimaryButtonOutline>
							</Link>
						</DivBackButtonSC>
					</DivMPBoxSC>
				</DivContainerSC>
			)}
		</>
	);
};

export default ListAuction;
