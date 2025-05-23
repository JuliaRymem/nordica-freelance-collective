import React from "react";

const ProjectsSingle = ({ data }) => {
  return (
    <section className="section-container">
      {data &&
        data.map((item) => (
          <section key={item._id}>
            <header>
              <h1 className=" text-gray-800 headline-standard">
                {item.projectTitle}
              </h1>
              <div></div>
              <p className="pb-10">
                Customer: <span className="italic">{item.customer}</span>
              </p>
            </header>
            <p className="p-text">{item.description}</p>
            <p
              className={`absolute top-2 right-2 first-letter:uppercase ${
                item.status === "completed" ? "text-green-500" : ""
              }${item.status === "in_progress" ? "text-orange-400" : ""}`}
            >
              Project Status: {item.status}
            </p>
            <time
              dateTime="2025-05-15"
              className="text-sm text-gray-500 italic"
            >
              {item.date}
            </time>
          </section>
        ))}
    </section>
  );
};

export default ProjectsSingle;
