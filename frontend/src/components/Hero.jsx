import React from "react";
import "./hero.css";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroSearch from "./HeroSearch";
import PopularSkills from "./PopularSkills";
import PopularServices from "./PopularServices";
import TrustedFreelancers from "./TrustedFreelancers";
import Footer from "./Footer";

function Hero() {
  return (
    <>

      <div className="hero-container">
        <HeroHeading />
        <HeroButtons />
        <HeroSearch />
        <PopularSkills />
        <PopularServices />
        <TrustedFreelancers />
      </div>

      <Footer />
    </>
  );
}

export default Hero;
