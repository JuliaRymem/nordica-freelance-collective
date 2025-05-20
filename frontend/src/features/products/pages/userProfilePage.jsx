import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllFreelancers } from "../../../../../CMS/queries/getAllProjects"; // Om du definierar din query här
import { client } from "../../../sanityClient"; // om client ligger direkt i src
import "../../styles/allfreelancer.css";

function FreelancerList() {
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(getAllFreelancers)
      .then((data) => {
        setFreelancers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Kunde inte hämta frilansare", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar frilansare...</p>;

  return (
    <div className="background">
      <div className="headerText">
        <h1 className="ourFreelancer">
          Våra <span className="freelancer">frilansare</span>
        </h1>
        <p className="headerP">
          Professionella och handplockade för dina behov.
        </p>

        <div className="freelancerContainer">
          {freelancers.map((freelancer) => (
            <div key={freelancer._id} className="freelancerId">
              <img
                src={freelancer.image || "/default.jpg"}
                alt={freelancer.freelancerName}
                className="freelancerImage"
              />
              <h2 className="freelancerName">{freelancer.freelancerName}</h2>
              <p className="freelancerTitle">{freelancer.title?.titleName}</p>
              <p className="category">
                <span className="categoryText">Kategori:</span>{" "}
                {freelancer.category?.categoryName}
              </p>
              <p className="skills">
                <span className="skillsText">Skills:</span>{" "}
                {freelancer.skills?.map((s) => s.skillName).join(", ")}
              </p>
              <Link
                to={`/freelancer/${freelancer.slug.current}`}
                className="readMoreBtn"
              >
                Läs mer
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreelancerList;
