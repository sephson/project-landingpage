import React from "react";
import "./Hero.css";
import Button from "./Button";
import "../App.css";
import Sample from "./videos/production ID_4444446.mp4";

function Hero() {
  return (
    <div className="hero-container">
      {/* <video src=".videos/video-1.mp4" autoPlay /> */}
      <video autoPlay loop muted src={Sample} type="video/mp4"></video>
      <h1>START LIVING TODAY</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default Hero;
