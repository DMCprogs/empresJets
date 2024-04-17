import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import useTopics from "../../plugins/useTopics";
import {
	DivBoxButtonsSC,
	DivBoxColumnImgSC,
	DivBoxRowContentSC,
	DivBoxTourInfSC,
	DivLogoJLBoxSC,
	DivTextBoxSC,
	ImgPlaneSC,
	Text400SC,
	Text600SC,
	LinkBackSC,
	DivBoxBlurSC,
	DivLoaderBoxSC,
	DivLoaderImagesSC,
} from "./style";
import ImageCarousel from "./ImageCarousel";
import JetLuxe from "./img/JetLuxeLogo.svg";
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
import { MoonLoader } from "react-spinners";
import moment from "moment";

const { Message, Topic } = useTopics;
const storage = getStorage();
const db = getFirestore();

const TourInfo = (props) => {
	const [flight, setFlight] = useState({});
	// const [auction, setAuction] = useState({});
	const [images, setImages] = useState(null);
	const [loading, setLoading] = useState(true);
	let { flight_id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const getImages = async (listImagesRef) => {
			let _images = [];
			await listAll(listImagesRef)
				.then(async (res) => {
					res.prefixes.forEach((folderRef) => {
						// All the prefixes under listRef.
						// You may call listAll() recursively on them.
					});
					for (const itemRef of res.items) {
						const i = res.items.indexOf(itemRef);
						// All the items under listRef.
						// let path = itemRef.fullPath;

						await getDownloadURL(ref(storage, itemRef.fullPath))
							.then((url) => {
								_images.push({ url });
								// `url` is the download URL for 'images/stars.jpg'
								// This can be downloaded directly:
							})
							.catch((error) => {
								// Handle any errors
							});
					}
					setImages(_images);
				})
				.catch((error) => {
					// Uh-oh, an error occurred!
				});
			// setImages(_images);
			setLoading(false);
		};

		getData().then((res) => {
			getImages(res.listImagesRef);
		});
	}, []);

	// console.log("auction", auction);

	const getData = async () => {
		let _flightData;
		// let _auctionData;

		const flightRef = doc(db, "flights", `${flight_id}`);
		const flightSnap = await getDoc(flightRef);
		// const auctionRef = doc(db, "auctions", `${auction_id}`);
		// const auctionSnap = await getDoc(auctionRef);

		if (flightSnap.exists()) {
			let listImagesRef = ref(
				storage,
				`tour-info/${flightSnap.data().aircraft_image}`
			);

			// getImages(listImagesRef)

			// _flightData.push({
			// 	data: flightSnap.data(),
			// })
			// _auctionData = auctionSnap.data();
			// setAuction(_auctionData);

			_flightData = flightSnap.data();
			setFlight(_flightData);

			return { listImagesRef };
		} else {
			console.log("No such flight!");
		}
	};

	console.log("flight.is_refurb", flight.is_refurb);

	// console.log("images", images);

	return (
		<>
			{loading ? (
				<>
					<DivLoaderBoxSC>
						<MoonLoader
							color="#edb935"
							loading
							speedMultiplier={0.7}
							size={40}
						/>
					</DivLoaderBoxSC>
				</>
			) : (
				<DivBoxBlurSC>
					<DivBoxTourInfSC>
						<DivBoxRowContentSC
							style={{
								zIndex: 9999999999999,
							}}
						>
							<div>
								<DivTextBoxSC
									style={{
										gap: "12px",
										marginBottom: "30px",
									}}
								>
									<Text600SC>Flight Itinerary: </Text600SC>
									<Text400SC>
										Route:{" "}
										{flight.origin +
											" - " +
											flight.destination}
									</Text400SC>
									<Text400SC>
										Date:{" "}
										{moment(
											flight.departure_time.toDate()
										).format("LL")}{" "}
										({flight.trip_type})
									</Text400SC>
									<Text400SC>
										Time:{" "}
										{moment(
											flight.departure_time.toDate()
										).format("LT")}
									</Text400SC>
								</DivTextBoxSC>
								<DivTextBoxSC>
									<Text600SC
										style={{
											marginBottom: "10px",
										}}
									>
										Aircraft:{" "}
									</Text600SC>
									<Text400SC>
										{flight.aircraft} (
										{flight.aircraft_class})
									</Text400SC>
									<Text400SC>Seats: {flight.seats}</Text400SC>
									<div
										style={{
											display: "grid",
											gridTemplateColumns:
												"max-content auto",
										}}
									>
										<div>
											<Text400SC>
												YOM: {flight.yom}
												{flight.is_refurb
													? `, Refurb: ${moment(
															flight.refurb.toDate()
													  ).format("YYYY")}`
													: null}{" "}
												{flight.is_refurb}
											</Text400SC>
											<Text400SC>
												Seller: {flight.operator}
											</Text400SC>
										</div>
									</div>
								</DivTextBoxSC>
							</div>
							<DivLogoJLBoxSC
								to={"/"}
								operator={JetLuxe}
								style={{
									justifySelf: "end",
								}}
							></DivLogoJLBoxSC>
						</DivBoxRowContentSC>
						{!images ? (
							<>
								<DivLoaderImagesSC>
									<MoonLoader
										color="#edb935"
										loading
										speedMultiplier={0.7}
										size={40}
									/>
								</DivLoaderImagesSC>
							</>
						) : (
							<ImageCarousel flightInfo={images} />
						)}

						<LinkBackSC onClick={() => navigate(-1)}>
							<FiArrowLeft size={14} />
							Back
						</LinkBackSC>
					</DivBoxTourInfSC>
				</DivBoxBlurSC>
			)}
		</>
	);
};

export default TourInfo;
