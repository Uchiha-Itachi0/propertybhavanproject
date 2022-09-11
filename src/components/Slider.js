import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image1 from "../assets/images/image1.png";


const Slider = () => {

    return (
            <Carousel autoPlay>
                <div>
                    <img alt="" src={Image1} />
                </div>
                <div>
                    <img alt="" src={Image1} />
                </div>
                <div>
                    <img alt="" src={Image1} />
                </div>
                <div>
                    <img alt="" src={Image1} />
                </div>
                <div>
                    <img alt="" src={Image1} />
                </div>
                <div>
                    <img alt="" src={Image1} />
                </div>
            </Carousel>
    )
}

export default Slider;