import React, { useEffect, useRef } from "react";
import TestimonialForm from "./TestimonialForm";

const TestimonialModal = ({ isOpen, onClose, freelancerId }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Eslint varnar annars.
    const dialogRef = modalRef.current;
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

  return (
    <div className="div-modal">
      <dialog
        ref={modalRef}
        className="relative overflow-visible rounded p-6 max-w-2xl max-h-2xl w-full m-auto bg-[#B2C4C5]"
      >
        <TestimonialForm freelancerId={freelancerId} onClose={onClose} />
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

export default TestimonialModal;
