import { useState, useEffect } from "react";
import { client } from "../../sanityClient";
import { searchFunction } from "../../../../CMS/queries/getAllProjects";
import SearchBar from "./searchBar";
import "../styles/allfreelancer.css";

const FreelancerSearchList = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // nytt tillstånd

  useEffect(() => {
    if (query.trim() === "") {
      setFreelancers([]);
      setHasSearched(false); // återställ när input är tom
      return;
    }

    const fetchData = async () => {
      try {
        const result = await client.fetch(searchFunction(query));
        setFreelancers(result);
        setHasSearched(true); // användaren har nu sökt
      } catch (error) {
        console.error("Kunde inte hämta frilansare", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="background">
      <div className="headerText">
        <h1 className="ourFreelancer">
          Sökresultat för <span className="freelancer">{query}</span>
        </h1>
        <SearchBar onSearch={setQuery} />
      </div>

      {/* Visa meddelande ENDAST om användaren har sökt och det inte finns resultat */}
      {hasSearched && freelancers.length === 0 ? (
        <p className="noResult">Inga resultat</p>
      ) : (
        <div className="freelancerContainer">
          {freelancers.map((freelancer) => (
            <div key={freelancer._id} className="freelancerId">
              <img
                src={
                  freelancer.image ||
                  freelancer.picture?.asset?.url ||
                  "/default.jpg"
                }
                alt={freelancer.freelancerName}
                className="freelancerImage"
              />
              <h2 className="freelancerName">{freelancer.freelancerName}</h2>
              <p className="freelancerTitle">{freelancer.title?.titleName}</p>
              <p className="skills">
                <span className="skillsText">Skills:</span>{" "}
                {freelancer.skills?.map((skill) => skill.skillName).join(", ")}
              </p>
              <button className="readMoreBtn">Läs mer</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FreelancerSearchList;
