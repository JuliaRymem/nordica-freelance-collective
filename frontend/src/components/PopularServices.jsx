import React from "react";

const services = [
  {
    title: "Web Design",
    description: "Modern, responsiv och användarvänlig design för alla plattformar.",
  },
  {
    title: "UI/UX Design",
    description: "Fokus på användarupplevelse, interaktion och konvertering.",
  },
  {
    title: "React Development",
    description: "Komponentbaserad frontend med hög prestanda och återanvändbarhet.",
  },
];

export default function PopularServices() {
  return (
    <section className="popular-services-section">
      <div className="popular-services-header">
        <h2 className="popular-services-title">Popular Services</h2>
        <p className="popular-services-subtitle">
          Våra mest efterfrågade kompetenser just nu.
        </p>
      </div>
      <div className="popular-services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="popular-service-card">
            <h3 className="popular-service-title">{service.title}</h3>
            <p className="popular-service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
