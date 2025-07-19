import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroSection.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const HeroSection = () => {
    return (
    <div className="hero-container">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        swipeable
        emulateTouch
      >
        <div><img src={img1} alt="Fashion 1" /></div>
        <div><img src={img2} alt="Fashion 2" /></div>
        <div><img src={img3} alt="Fashion 3" /></div>
      </Carousel>

      <div className="hero-content">
        <h1>FashionWorld Dubai 2025</h1>
        <p>Where Style Meets Culture</p>
        <button >Register Now</button>
      </div>

    </div>
  );
};

export default HeroSection;
