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

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-buttons">
      <button className="btn-login cursor-pointer" onClick={handleLogIn}>
        {isUserLoggedIn ? "LOGGA UT" : "LOGGA IN"}
      </button>
      <button className="btn-join" onClick={scrollToFooter}>
        JOIN US
      </button>
    </div>
  );
}
