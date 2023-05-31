import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";

const Hero = () => {
  return (
    <div className="relative w-full  max-w-[1360px] mx-auto">
      {" "}
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        interval={2500}
      >
        <div>
          <img src={Img1} className="h-[700px]" />
        </div>
        <div>
          <img src={Img2} className="h-[700px]" />
        </div>
        <div>
          <img src={Img3} className="h-[700px]" />
        </div>
        <div>
          <img src={Img4} className="h-[700px]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
