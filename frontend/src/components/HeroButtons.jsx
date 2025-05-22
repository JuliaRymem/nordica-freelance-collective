import React from "react";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import useAuth from "../features/hook/useAuth";

export default function HeroButtons() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isUserLoggedIn, doSignOut } = useAuth();

  const handleLogIn = () => {
    if (isUserLoggedIn) {
      return doSignOut();
    }
    setModalOpen(true);
  };
  return (
    <div className="hero-buttons">
      <button className="btn-login cursor-pointer" onClick={handleLogIn}>
        {isUserLoggedIn ? "LOGGA UT" : "LOGGA IN"}
      </button>
      <button className="btn-join ">JOIN US</button>
      <LoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
