import React, { useEffect, useLayoutEffect, useState } from "react";
import {
	ButtonMethodPay,
	DivChange,
	DivChosePay,
	DivContentPaymentsSC,
	DivPayButton,
	DivPayment,
} from "../bid/style.js";
import PaymentCoinbase from "./coinbase";
import CardPay from "./Stripe.js";
// import CheckoutForm from "./CheckoutForm.js";
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
	DivTextInfoSC,
	DivContentSC,
} from "./style";
import ImageCarousel from "./ImageCarousel";
import image from "../../img/logos/jet-luxe.png";

import { FiArrowLeft } from "react-icons/fi";
import {
	BlurMarginSC,
	ButtonSC,
	DivAllLoaderBoxSC,
	DivBoxBoxTimerSC,
	DivBoxHomeSC,
	DivBoxInfoGoldSC,
	DivBoxInfoGraySC,
	DivBoxRowsSC,
	DivButtonBoxSC,
	DivLoaderBoxSC,
	DivPlaneContainerSC,
	DivTextHisSC,
	DivTextOperated,
	DivTextPlane,
	DivTextTimerSC,
	ImgPlaneSC3,
	LinkSolidYellowSC,
} from "../plane_info/style";
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

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const storage = getStorage();

const Payment = (props) => {
	const [selected, setSelected] = useState("coinbase");
	const [auction, setAuction] = useState([]);
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState(null);
	const [bids, setBids] = useState();
	const navigate = useNavigate();
	let { auction_id } = useParams();
	const listRef = ref(storage, "aircraft");
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
							.then(async (url) => {
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

	const db = getFirestore();

	useLayoutEffect(() => {
		// getData();
		// getBids();
	}, []);

	const getData = async () => {
		let _allData;
		const auctionRef = doc(db, "auctions", `${auction_id}`);
		const auctionSnap = await getDoc(auctionRef);

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
				let listImagesRef = ref(
					storage,
					`tour-info/${flightSnap.data().aircraft_image}`
				);
				_allData = {
					auction: auctionSnap.data(),
					flight: flightSnap.data(),
				};
				setAuction(_allData);
				return { listImagesRef };
			} else {
				// doc.data() will be undefined in this case
				console.log("No such flight!");
			}
		} else {
			// doc.data() will be undefined in this case
			console.log("No such auction!");
		}
	};

	// const auctionData = auction.map((auction, i) => {
	// 	return (

	// 	);
	// });
	console.log(auction);

	const stripePromise = loadStripe(
		"pk_test_51MQtDjHBHFzDVIPpgDEIu22mO1kNOxBlQbrKAPXu7pZjqlPa7hJKHCpum6WuS49KsJcSiB4UeybWzfPO1EcXXWR9000QmDVFdx"
	);

	return (
		<DivContentPaymentsSC>
			{loading ? (
				<div
					style={{
						minHeight: "100vh",
						display: "grid",
						justifyItems: "center",
						width: "100%",
						alignItems: "center",
					}}
				>
					<DivLoaderBoxSC>
						<MoonLoader
							color="#edb935"
							loading
							speedMultiplier={0.7}
							size={40}
						/>
					</DivLoaderBoxSC>
				</div>
			) : (
				<>
					<>
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
									// key={`cheburek${i}`}
								>
									<Text600SC>Flight Itinerary: </Text600SC>
									<Text400SC>
										Route:
										{auction.flight.origin +
											" - " +
											auction.flight.destination}
									</Text400SC>
									<Text400SC>
										Date:{" "}
										{moment(
											auction.flight.departure_time.toDate()
										).format("LL")}{" "}
										({auction.flight.trip_type})
									</Text400SC>
									<Text400SC>
										Time:{" "}
										{moment(
											auction.flight.departure_time.toDate()
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
										{auction.flight.aircraft +
											" - " +
											auction.flight.aircraft_class}
									</Text400SC>
									<Text400SC>
										Seats:{auction.flight.seats}
									</Text400SC>
									<div
										style={{
											display: "grid",
											gridTemplateColumns:
												"max-content auto",
										}}
									>
										<div>
											<Text400SC>
												YOM: {auction.flight.yom},
												Refurb:{" "}
												{moment(
													auction.flight.refurb.toDate()
												).format("YYYY")}
											</Text400SC>
											<Text400SC>
												Seller:{" "}
												{auction.flight.operator}
											</Text400SC>
										</div>
									</div>
								</DivTextBoxSC>
							</div>
							<DivLogoJLBoxSC
								to={"/"}
								operator={image}
								style={{
									justifySelf: "end",
								}}
							></DivLogoJLBoxSC>
						</DivBoxRowContentSC>
						{/* <DivTextPlane>{auction.flight.aircraft}</DivTextPlane>
					<ImgPlaneSC3 Photo={auction.aircraft_image} />
					<DivTextPlane>
						{auction.flight.origin +
							" - " +
							auction.flight.destination}
					</DivTextPlane>
					<DivTextOperated>Operated by: Jet Luxe</DivTextOperated>

				 */}
						<ImageCarousel flightInfo={images} />
						{/* 						<DivTextInfoSC>
							Final price includes: Winning Bid + segment fees
							($19.70 per passenger for International, $4.50 for
							domestic) + Applicable VAT (7.5% for domestic
							flights, 0% for International)
						</DivTextInfoSC> */}
					</>
					<div
						style={{
							display: "grid",
							justifyItems: "center",
							width: "100%",
						}}
					>
						<DivPayment>
							<DivChosePay>Choose a payment method</DivChosePay>

							<DivPayButton>
								<ButtonMethodPay
									onClick={() => setSelected("coinbase")}
									isChosen={selected === "coinbase"}
								>
									Cryptocurrency
								</ButtonMethodPay>
								<ButtonMethodPay
									onClick={() => setSelected("credit")}
									isChosen={selected === "credit"}
								>
									Pay via Credit Card
								</ButtonMethodPay>
								{/* <ButtonMethodPay
						// onClick={ () => setSelected('transfer') }
						// isChosen={ selected === 'transfer' }
					>
						<strike>Pay via wire transfer option</strike>
					</ButtonMethodPay> */}
							</DivPayButton>

							<DivChange>
								{selected === "coinbase" ? (
									<PaymentCoinbase
										money={auction.auction.highest_bid}
									/>
								) : null}
								{selected === "credit" ? (
									<Elements stripe={stripePromise}>
										<CardPay
											auction={auction}
											auction_id={auction_id}
										/>
									</Elements>
								) : // <CheckoutForm />
								null}
							</DivChange>
						</DivPayment>
					</div>
				</>
			)}
		</DivContentPaymentsSC>
	);
};

export default Payment;
