const FreelancerSinlge = ({ data }) => {
  return (
    <section className="section-container lg:bg-transparent">
      {data && (
        <section key={data._id}>
          <header className="">
            <img
              className="img-mobile mt-10 mx-auto lg:w-94 lg:h-94"
              src={data.image}
              alt={`Profile picture of ${data.freelancerName}`}
            />
            <article>
              <h1
                className="headline headline-standard absolute top-2 right-5 left-5 bg-[#b2c1c5] text-[#FDFFFF] lg:text-6xl
              lg:rotate-20 lg:top-15 lg:-right-100  lg:bg-transparent lg:text-shadow-amber-600/60 "
              >
                {data.freelancerName}
              </h1>
              <p className="absolute top-12 left-8 text-center text-xs italic lg:rotate-20 lg:top-13 lg:-right-100 lg:text-xl lg: text-black/70">
                {data.title}
              </p>
            </article>
          </header>
          <div className="skill-div-mobile skill-div-mb">
            <h3 className="text-lg font-semibold text-gray-800">Skills:</h3>
            <div className="relative w-32 h-6 overflow-hidden ">
              <ul className="animate-slide">
                {data.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="h-6 flex items-center justify-start italic"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default FreelancerSinlge;
