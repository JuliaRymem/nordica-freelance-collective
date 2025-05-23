import React from "react";
import useAuth from "../features/hook/useAuth";

export default function HeroButtons() {
  const { isUserLoggedIn, doSignOut, doSignInWithGoogle } = useAuth();

  const handleLogIn = () => {
    if (isUserLoggedIn) {
      return doSignOut();
    }
    doSignInWithGoogle().then((result) => {
      console.log(`Lyckades logga in ${result.user.displayName}`);
    });
  };
  return (
    <div className="hero-buttons">
      <button className="btn-login cursor-pointer" onClick={handleLogIn}>
        {isUserLoggedIn ? "LOGGA UT" : "LOGGA IN"}
      </button>
      <button className="btn-join ">JOIN US</button>
    </div>
  );
}
