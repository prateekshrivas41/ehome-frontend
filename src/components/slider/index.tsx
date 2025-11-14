import React, { useRef } from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./slider.css";



const NextArrow = ({ onClick }) => {
    return (
        <IconButton
            onClick={onClick}
            style={{ position: "absolute", top: "50%", right: "10px", zIndex: 1 }}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <IconButton
            onClick={onClick}
            style={{ position: "absolute", top: "50%", left: "10px", zIndex: 1 }}
        >
            <ArrowBackIosIcon />
        </IconButton>
    );
};

const CenterSlider = ({ data = [] }) => {
    const sliderRef = useRef(null)
   const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1, // Always show one image
    adaptiveHeight: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
    responsive: [
        {
            breakpoint: 500, // Mobile view breakpoint
            settings: {
                slidesToShow: 1, // Show one image per slide
            }
        },
        {
            breakpoint: 1200, // Medium screens
            settings: {
                slidesToShow: 1, // Keep 1 image visible for medium screens
            }
        }
    ]
};

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}  >
                {data.map((item) => {
                    return (
                        <div key={item.id} className="img-slider" >
                            <img src={item.image} className="Img-carousel" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default CenterSlider;
