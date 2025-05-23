import React, { useState } from "react";
import usePostTestimonial from "../../../hook/usePostTestimonial";

function TestimonialForm({ freelancerId, onClose }) {
  const [title, setTitle] = useState("");
  const [uploadImage, setUploadImage] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const stars = [1, 2, 3, 4, 5];

  // Mutation inneåller funktion för köra post,loading, error och success
  const mutation = usePostTestimonial();

  const stringArray = [title, comment];

  const validStrings = stringArray.every((string) => string.trim() !== "");

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

    if (!validTypes.includes(file.type)) return;

    setUploadImage(file);
  };
  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    if (!validStrings || !uploadImage || rating <= 0) {
      return setError("Alla fält måste vara korrekt ifyllda..");
    }

    setIsLoading(true);

    mutation.mutate(
      {
        title: title,
        uploadImagefile: uploadImage,
        comment: comment,
        rating: rating,
        freelancerId: freelancerId,
      },
      {
        onSuccess: () => {
          setIsLoading(false), onClose();
        },
        onError: () => {
          setIsLoading(false);
          setError("Något gick fel");
        },
      }
    );
  };
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="title" className="text-left">
        Titel:
      </label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Ditt eller företagets namn."
        className=" p-1 border rounded"
      />

      <label htmlFor="image" className="text-left">
        Välj en bild:
      </label>
      <input
        id="image"
        accept="image/*"
        type="file"
        onChange={handleUpload}
        className="border rounded p-1"
      />

      <label htmlFor="comment" className="text-left">
        Kommentar:
      </label>
      <textarea
        id="comment"
        rows="4"
        cols="50"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border rounded p-1 max-h-50"
      />

      <section className="flex gap-1 items-center">
        <label htmlFor="rating" className="text-left">
          Hur nöjd är du?
        </label>
        {stars.map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className={`text-4xl flex flex-row transition ${
              star <= (hoverRating || rating)
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            aria-label="Sätt betyg 1-5"
          >
            ★
          </button>
        ))}
      </section>

      {error && <p className="text-red-600">{error}</p>}
      <button
        onClick={handleSubmit}
        className=" bg-green-700 text-white px-4 py-2 my-5 rounded hover:cursor-pointer hover:bg-green-600"
        disabled={isLoading}
        aria-label="Submit button"
      >
        {isLoading ? "Laddar upp..." : "Submit"}
      </button>
    </form>
  );
}

export default TestimonialForm;
