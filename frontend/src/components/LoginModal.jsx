import React, { useRef, useState, useEffect } from "react";
import useAuth from "../features/hook/useAuth";

export const LoginModal = ({ isOpen, onClose }) => {
  const loginRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { doSignInUserWithEmailAndPassword, doSignInWithGoogle } = useAuth();

  useEffect(() => {
    // Eslint varnar annars.
    const dialogRef = loginRef.current;
    if (!dialogRef) return;

    // Om användaren klicka isOpen till true och den inte redan är öppen så öppnas den
    // och overflow hiden för att det inte ska gå att scrolla bakom modal..
    if (isOpen && !dialogRef.open) {
      dialogRef.showModal();
      document.body.classList.add("overflow-hidden");

      //Om användaren klickar isOpen till falsk och den är öppen så stängs den.
    } else if (!isOpen && dialogRef.open) {
      dialogRef.current.close();
      document.body.classList.remove("overflow-hidden");
    }
    // Förhindra att anväöndaren kan klicka utanför för att stänga.
    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    dialogRef.addEventListener("cancel", handleCancel);

    return () => {
      dialogRef.removeEventListener("cancel", handleCancel);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGoogle = () => {
    doSignInWithGoogle().then((result) => {
      console.log(`Lyckades logga in ${result.user.displayName}`);
      onClose();
    });
  };
  return (
    <div className="div-modal">
      <dialog
        ref={loginRef}
        className="relative overflow-visible rounded p-6 max-w-2xl max-h-2xl w-full m-auto bg-[#B2C4C5] flex flex-col gap-5"
      >
        <label htmlFor="email" className="text-left">
          Email:
        </label>
        <input
          className="p-1 border rounded"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="text-left">
          Password:{" "}
        </label>
        <section className="relative">
          <input
            value={password}
            id="password"
            className="w-full p-1 border rounded"
            type={isPasswordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="absolute top-0 right-0 text-2xl"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? "🙈" : "👁️"}
          </button>
        </section>

        <button className="cursor-pointer" onClick={handleGoogle}>
          Logga in med Google
        </button>
        <button
          aria-label="Close Button"
          onClick={onClose}
          className="close-btn"
        >
          X
        </button>
      </dialog>
    </div>
  );
};
