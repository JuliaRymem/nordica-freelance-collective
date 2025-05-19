import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import showcaseImage from "../assets/picci.png"; // använd din bild

export default function TrustedFreelancers() {
  return (
    <div className="trusted-combined-wrapper">
      <div className="trusted-image-section">
        <img
          src={showcaseImage}
          alt="Freelancer work"
          className="trusted-image-background"
        />
        <div className="trusted-card-overlay">
          <p className="trusted-title">Trusted Freelancers</p>
          <span className="trusted-stars">⭐️⭐️⭐️⭐️⭐️</span>
          <p className="trusted-subtext">Over 200 satisfied clients</p>
          <div className="trusted-avatars">
            <img src={avatar1} alt="Freelancer 1" className="avatar-img" />
            <img src={avatar2} alt="Freelancer 2" className="avatar-img" />
            <img src={avatar3} alt="Freelancer 3" className="avatar-img" />
            <img src={avatar4} alt="Freelancer 4" className="avatar-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
