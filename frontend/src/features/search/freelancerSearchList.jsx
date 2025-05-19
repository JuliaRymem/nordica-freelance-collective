import { useState, useEffect } from "react";
import { client } from "../../sanityClient";
import { searchFunction } from "../../../../CMS/queries/getAllProjects";
import SearchBar from "./searchBar";

const FreelancerSearchList = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      setFreelancers([]);
      return;
    }

    const fetchData = async () => {
      try {
        const result = await client.fetch(searchFunction(query));
        setFreelancers(result);
      } catch (error) {
        console.error("Kunde inte hämta frilansare", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {freelancers.length === 0 ? (
        <p>No results</p>
      ) : (
        freelancers.map((freelancer) => (
          <div key={freelancer._id}>
            <h2>{freelancer.freelancerName}</h2>
            <p>{freelancer.title?.titleName}</p>
            <div>
              {freelancer.skills?.map((skill, index) => (
                <span key={index}>{skill.skillName}</span>
              ))}
            </div>
            {freelancer.picture?.asset?.url && (
              <img
                src={freelancer.picture.asset.url}
                alt={freelancer.freelancerName}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default FreelancerSearchList;
