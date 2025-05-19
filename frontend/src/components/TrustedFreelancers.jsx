import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";

export default function TrustedFreelancers() {
  return (
    <div className="trusted-card">
      <div>
        <p className="trusted-title">Trusted Freelancers</p>
        <span className="trusted-stars">⭐️⭐️⭐️⭐️⭐️</span>
        <p className="trusted-subtext">Over 200 satisfied clients</p>
      </div>
      <div className="trusted-avatars">
        <img src={avatar1} alt="Freelancer 1" className="avatar-img" />
        <img src={avatar2} alt="Freelancer 2" className="avatar-img" />
        <img src={avatar3} alt="Freelancer 3" className="avatar-img" />
        <img src={avatar4} alt="Freelancer 4" className="avatar-img" />
      </div>
    </div>
  );
}
