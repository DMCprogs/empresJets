import { isNotNull } from "ramda-adjunct";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { map, tap } from "rxjs";
import useTopics from "../../plugins/useTopics";
import { PrimaryButton } from "../common/style";
import { useNavigate } from "react-router-dom";
import Contact from "../contact";
import Gallery from "../gallery";
import SocialMedia from "../social_media";
import {
	DivBodyTextSC,
	DivBoxButtonBG2SC,
	DivBoxButtonSC,
	DivBoxContentSC,
	DivBoxImagePlaneSC,
	DivBoxImageSC,
	DivBoxText2SC,
	DivBoxTextSC,
	DivImgageLandingRowsSC,
	DivMainTextSC,
	DivTextImageSC,
	Image2SC,
	Image3SC,
	ImageSC,
	ImgInfoSC,
	TextImageBG2SC,
	DivLoaderBoxSC,
	DivNotActionsSC,
	H1NotActionsSC,
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
const Landing = () => {
	const { Topic } = useTopics;
	const navigate = useNavigate();
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		Topic("firebase", "auth:changed")
			.pipe(map(isNotNull))
			.pipe(tap(setIsAuth))
			.subscribe(console.log);
	}, []);
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

			const _auctionDocsData = await getDocs(_auctionDocs);

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
							await _setAuctions(_dataAuctions);
							setLoading(false);
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
				});
			} else {
				console.log("not work");
			}
		} catch (e) {
			console.log(e);
		}
	};
	const list_auctions = auctions.slice(0, 3).map((auction, i) => {
		return (
			<ImgInfoSC
				onClick={() => {
					navigate(`/auctions/${auction.auction_id}/bid`);
				}}
			>
				<DivMainTextSC>
					{auction.flight.origin} &ndash; {auction.flight.destination}
				</DivMainTextSC>
				<DivMainTextSC>{auction.flight.Flight_date}</DivMainTextSC>
			</ImgInfoSC>
		);
	});
	return (
		<>
			<DivBoxContentSC>
				<DivBoxImageSC>
					<ImageSC>
						<DivTextImageSC>
							Your Private Jet is Waiting...
						</DivTextImageSC>
						<DivBoxTextSC>
							Empress Jets is the World’s First Private Jet
							Charter Auction Site
						</DivBoxTextSC>
						<DivBoxButtonSC>
							<Link to="/home">
								<PrimaryButton
									isEnabled="true"
									style={{
										marginTop: "16px",
									}}
								>
									Enter Marketplace
								</PrimaryButton>
							</Link>
						</DivBoxButtonSC>
					</ImageSC>
				</DivBoxImageSC>

				<div
					style={{
						width: "calc(100% - 40px)",
						padding: "0 10px",
					}}
				>
					<DivBoxText2SC>Live Auctions:</DivBoxText2SC>

					<DivBoxImagePlaneSC>
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
							<>
								{auctions.length !== 0 ? (
									list_auctions
								) : (
									<DivNotActionsSC>
										<H1NotActionsSC>
											No auctions yet
										</H1NotActionsSC>
									</DivNotActionsSC>
								)}
							</>
						)}
					</DivBoxImagePlaneSC>
				</div>

				<DivImgageLandingRowsSC>
					<Image2SC>
						<TextImageBG2SC>
							Enter to Win a Free Private Jet Charter Flight
						</TextImageBG2SC>
						<DivBoxButtonBG2SC>
							<a
								href="https://airtable.com/shrE7A6jVLoPKw5It"
								target="_blank"
								rel="noreferrer"
							>
								<PrimaryButton isEnabled="true">
									Feeling Lucky!
								</PrimaryButton>
							</a>
						</DivBoxButtonBG2SC>
					</Image2SC>

					<Image3SC>
						<TextImageBG2SC>
							Request a private jet charter flight today
						</TextImageBG2SC>
						<DivBoxButtonBG2SC>
							<Link to={"/trip-request"}>
								<PrimaryButton isEnabled="true">
									Book a Trip
								</PrimaryButton>
							</Link>
						</DivBoxButtonBG2SC>
					</Image3SC>
				</DivImgageLandingRowsSC>
				<Gallery />
				<SocialMedia />

				<div
					style={{
						width: "100%",
						maxWidth: "870px",
					}}
				>
					<Contact />
				</div>
			</DivBoxContentSC>
		</>
	);
};

export default Landing;
