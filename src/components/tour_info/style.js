import {
	IoIosArrowBack, IoIosArrowForward
} from 'react-icons/io'
import {
	Link
} from 'react-router-dom'
import styled from 'styled-components'
// import image from '../../img/Main_Logo_Negative_JLX.png'

export const DivBoxTourInfSC = styled.div`
    display: grid;
    justify-items: start;
    /* margin-bottom: 80px; */
    /* min-height: 100%; */
	padding: 0 0 80px 0;
	box-sizing: border-box;
    /* backdrop-filter: blur(11px); */
`
export const DivLoaderBoxSC = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: calc(100vh - 140px);
	/* height: 100%; */
    backdrop-filter: blur(11px);
	position: absolute;
	width: 100%;
    @media (max-width: 1000px) {
        height: calc(100vh);
	}
`

export const DivLoaderImagesSC = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 200px;
	/* height: 100%; */
    /* backdrop-filter: blur(11px); */
	width: 100%;
`

export const DivBoxBlurSC = styled.div`
    width: 100%;
    min-height: calc(100vh - 140px);
    background: rgba(69, 69, 69, 0.1);
    backdrop-filter: blur(11px);
    border-radius: 0px;
    position: absolute;
    top: 0;
    padding-top: 140px;
    @media (max-width: 1000px) {
        padding-top: 65px;
	}
`
export const LinkBackSC = styled.button`
    width: calc(100vw - 40px);
    margin-top: 30px;
    margin-bottom: 20px;
	display: grid;
    justify-self: center;
	justify-content: center;
	height: 41px;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: initial;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #edb935;
	align-items: center;
    align-self: end;
	text-align: center;
	/* letter-spacing: 0.1px; */
	text-decoration: none;
	grid-template-columns: max-content max-content;
	column-gap: 2px;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
	:active {
		opacity: 0.6;
	}
`

export const LinkBack22SC = styled.button`
    width: 100%;
    //margin-top: 30px;
	display: grid;
    justify-self: center;
	justify-content: center;
	height: 41px;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: initial;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #edb935;
	align-items: center;
    align-self: end;
	text-align: center;
	/* letter-spacing: 0.1px; */
	text-decoration: none;
	grid-template-columns: max-content max-content;
	column-gap: 2px;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
	:active {
		opacity: 0.6;
	}
`

export const DivBoxRowContentSC = styled.div`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: fit-content;
    grid-row-gap: 25px;
    width: 90%;
    @media (max-width: 400px) {
        width: 89%;
    }
`
export const DivTextBoxSC = styled.div`
    display: grid;
    grid-template-rows: repeat(5, max-content);
    height: fit-content;
`

export const Text600SC = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #e8e8e8;
`

export const Text400SC = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #e8e8e8;
`

export const DivBoxColumnImgSC = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 15px;
    justify-items: center;
    margin-top: 25px;
`

export const DivBoxButtonsSC = styled.div`
    width: calc(100% - 40px);
    max-width: 800px;
    padding: 0 20px;
    display: grid;
    justify-items: center;
    justify-self: center;
    height: 41px;
    padding: 50px 0px;
    @media (min-width: 768px) {
        height: 60px;
    }
`

export const DivLogoJLBoxSC = styled(Link)`
    text-decoration: none;
    display: grid;
    background: url(${({operator}) => operator && `${operator}`}) no-repeat center;
	/* background-image: ${ ({
		operator
	}) => operator && `url(${ operator })` }; */
    background-size: 100%;
    height: 140px;
    width: 179px;
    z-index: 99999999999;
    /* margin-right: 300px; */
    @media (min-width: 1000px) {
        height: 240px;
        width: 279px;
    }
    @media (max-width: 710px) {
        margin-right: 0px;
    }
    @media (max-width: 480px) {
        height: 40px;
        width: 80px;
        /* background-size: 100px; */
    }
`

//styles for imagecarousel

export const DivCustomArrowRight = styled(IoIosArrowForward)`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 52%;
    top: 90%;
    color: #fff;
    cursor: pointer;
`

export const DivCustomArrowLeft = styled(IoIosArrowBack)`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 52%;
    color: #fff;
    top: 90%;
    cursor: pointer;

`

export const ImgPlaneSC = styled.div`
    /* background-size: 100%; */
    background-size: cover;
    border-radius: 6px;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 300px;
    aspect-ratio: 1/1;
    background-image: ${ ({
		Photo
	}) => Photo && `url(${ Photo })` };
    @media (max-width: 1420px) {
        min-width: 250px;
    }
    @media (max-width: 1200px) {
        min-width: 300px;
    }
    @media (max-width: 1050px) {
        min-width: 250px;
    }
    @media (max-width: 900px) {
        min-width: 200px;
    }
    @media (max-width: 768px) {
        min-width: 250px;
    }
    @media (max-width: 600px) {
        min-width: 200px;
    }
    @media (max-width: 480px) {
        min-width: 175px;
    }
    @media (max-width: 430px) {
        min-width: 250px;
    }
    @media (max-width: 310px) {
        min-width: 200px;
    }
`
//end styles for imagecarousel
