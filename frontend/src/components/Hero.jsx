import React from "react";
import "./hero.css";
import HeroTopbar from "./HeroTopbar";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroSearch from "./HeroSearch";
import PopularSkills from "./PopularSkills";
import PageLinks from "./PageLinks";
import PopularServices from "./PopularServices";
import TrustedFreelancers from "./TrustedFreelancers";
import Footer from "./Footer";

function Hero() {
  return (
    <div className="hero-container">
      <HeroTopbar />
      <HeroHeading />
      <HeroButtons />
      <HeroSearch />
      <PopularSkills />
      <PageLinks />
      <PopularServices />
      <TrustedFreelancers />
      <Footer />
    </div>
  );
}

export default Hero;
