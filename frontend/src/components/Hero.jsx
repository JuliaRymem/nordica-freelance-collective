import React from "react";
import "./hero.css";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroSearch from "./HeroSearch";
import PopularServices from "./PopularServices";
import TrustedFreelancers from "./TrustedFreelancers";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <HeroHeading />
        <HeroButtons />
        <HeroSearch />
        <PopularServices />
        <TrustedFreelancers />
      </div>
    </>
  );
}

export default Hero;
