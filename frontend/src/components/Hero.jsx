import React from "react";
import "./hero.css";
import HeroTopbar from "./HeroTopbar";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroSearch from "./HeroSearch";
import PopularSkills from "./PopularSkills";
import PopularServices from "./PopularServices";
import TrustedFreelancers from "./TrustedFreelancers";

function Hero() {
  return (
    <div className="hero-container">
      <HeroTopbar />
      <HeroHeading />
      <HeroButtons />
      <HeroSearch />
      <PopularSkills />
      <PopularServices />
      <TrustedFreelancers />
    </div>
  );
}

export default Hero;
