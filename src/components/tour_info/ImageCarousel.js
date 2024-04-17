import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
	DivCustomArrowLeft,
	DivCustomArrowRight,
	ImgPlaneSC,
} from "./style";
import "./ImageCarousel.css";
import { MoonLoader } from "react-spinners";

const ImageCarousel = ({ flightInfo }) => {
	const [images, setImages] = useState(flightInfo);
	useEffect(() => {
		setImages(flightInfo)
	}, [images])
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: {
				max: 4000,
				min: 1750,
			},
			items: 5,
			slidesToSlide: 1,
		},
		desktop: {
			breakpoint: {
				max: 1750,
				min: 1200,
			},
			items: 4,
			slidesToSlide: 1,
		},
		smalldesktop: {
			breakpoint: {
				max: 1200,
				min: 1000,
			},
			items: 3,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: {
				max: 1000,
				min: 768,
			},
			items: 3,
			slidesToSlide: 1,
		},
		smalltablet: {
			breakpoint: {
				max: 768,
				min: 430,
			},
			items: 2,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: {
				max: 430,
				min: 100,
			},
			items: 1,
			slidesToSlide: 1,
		},
		// smallmobile: {
		//   breakpoint: { max: 480, min: 360 },
		//   items: 2,
		//   slidesToSlide: 2,
		// },
		// mini: {
		//   breakpoint: { max: 360, min: 120 },
		//   items: 2,
		//   slidesToSlide: 2,
		// },
	};

	const CustomRightArrow = ({ onClick, ...rest }) => {
		const {
			onMove,
			carouselState: { currentSlide, deviceType },
		} = rest;
		// onMove means if dragging or swiping in progress.
		return <DivCustomArrowRight onClick={() => onClick()} />;
	};

	const CustomLeftArrow = ({ onClick, ...rest }) => {
		const {
			onMove,
			carouselState: { currentSlide, deviceType },
		} = rest;
		// onMove means if dragging or swiping in progress.
		return <DivCustomArrowLeft onClick={() => onClick()} />;
	};

	return (
		<>
			{images ? (
				<Carousel
					infinite={true}
					customRightArrow={<CustomRightArrow />}
					customLeftArrow={<CustomLeftArrow />}
					sliderClass="imagecarousel-slider"
					itemClass="imagecarousel-item"
					containerClass="imagecarousel-container"
					responsive={responsive}
				>
					{images.map((image, i) => {
						return (
							<ImgPlaneSC
								Photo={image.url}
								key={`aircraft-${i}`}
							/>
						);
					})}
				</Carousel>
			) : null}
		</>
	);
};

export default ImageCarousel;
