import React from "react";

const TestimonialSingle = ({ data }) => {
  return (
    <section className="section-container">
      {data &&
        data.map((item) => (
          <section key={item._id}>
            <h1 className="headline-standard pb-10">{item.name}</h1>
            <p className="p-text">{item.comment}</p>
            <article className="flex pt-4">
              <p>Rating: </p>
              {Array(item.rating)
                .fill()
                .map((_, index) => (
                  <p className="text-shadow-lg" key={index}>
                    ⭐
                  </p>
                ))}
            </article>
          </section>
        ))}
    </section>
  );
};

export default TestimonialSingle;
