import React from "react";

const TestimonialSingle = ({ data }) => {
  return (
    /* om det finns flera testimonial så visas testimonial-container som är grid, annars 
       Den vanliga section-container. linande längre ner beroende på antalet testimonial*/
    <section
      className={` ${
        data.length <= 1 ? "section-container" : "testimonial-container w-full"
      }`}
    >
      {data &&
        data.map((item) => (
          <section
            key={item._id}
            className={`relative ${
              data.length <= 1
                ? "w-full h-full"
                : "bg-[#FDFFFF] p-6 rounded-xl shadow-md min-w-2xs w-auto mx-auto"
            }`}
          >
            <article
              className={`${
                data.length <= 1
                  ? "h-35 w-15 md:h-12 md:w-8"
                  : "flex justify-center"
              }`}
            >
              <img
                className={`max-w-40 ${
                  data.length <= 1 ? "img-testimonial" : ""
                }`}
                src={item.image}
                alt={`Picture of ${item.name}`}
              />
            </article>
            <h1 className="headline-standard pb-10">{item.name}</h1>
            <p className="p-text max-w-lg lg:text-center   lg:mx-auto">
              {item.comment}
            </p>
            <article className="flex pt-4">
              <p>Omdöme: </p>
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
