import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Webbdesign",
    description: "Modern, responsiv och användarvänlig design för alla plattformar.",
  },
  {
    title: "UI/UX- design",
    description: "Fokus på användarupplevelse, interaktion och konvertering.",
  },
  {
    title: "React development",
    description: "Komponentbaserad frontend med hög prestanda och återanvändbarhet.",
  },
];

export default function PopularServices() {
  return (
    <div className="popular-services-wrapper">
      <section className="popular-services-section">
        <div className="popular-services-header">
          <h2 className="popular-services-title">Populära tjänster</h2>
          <p className="popular-services-subtitle">
            Våra mest efterfrågade kompetenser just nu
          </p>

          {/* Knapp - (test)  */}
          <div className="mt-6 flex justify-center">
            <Link to="/freelancer">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 shadow-md">
                Läs mer här
              </button>
            </Link>
          </div>
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
    </div>
  );
}