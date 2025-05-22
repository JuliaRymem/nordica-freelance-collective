import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../../sanityClient";
import {
  getAllFreelancers,
  searchFunction,
} from "../../../../../CMS/queries/getAllProjects";
import SearchBar from "../../search/searchBar";
import "../../styles/allfreelancer.css";

function FreelancerList() {
  const [freelancers, setFreelancers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(true);

  // Ladda alla frilansare
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

  // Hämta sökresultat när query ändras
  useEffect(() => {
    if (query.trim() === "") {
      setHasSearched(false);
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const result = await client.fetch(searchFunction(query));
        setSearchResults(result);
        setHasSearched(true);
      } catch (error) {
        console.error("Kunde inte hämta sökresultat", error);
      }
    };

    fetchData();
  }, [query]);

  const displayedFreelancers = hasSearched ? searchResults : freelancers;

  if (loading) return <p className="text-center">Laddar frilansare...</p>;

  return (
    <div className="background">
      <div className="headerText">
        <h1 className="ourFreelancer">
          {hasSearched ? (
            <>
              Sökresultat för <span className="freelancer">{query}</span>
            </>
          ) : (
            <>
              Våra <span className="freelancer">frilansare</span>
            </>
          )}
        </h1>

        {!hasSearched && (
          <p className="headerP">
            Professionella och handplockade för dina behov.
          </p>
        )}

        <SearchBar onSearch={setQuery} />
      </div>

      {hasSearched && searchResults.length === 0 ? (
        <p className="noResult text-center text-gray-600 mt-6">
          Inga resultat
        </p>
      ) : (
        <div className="freelancerContainer">
          {displayedFreelancers.map((freelancer) => (
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
              {freelancer.category?.categoryName && (
                <p className="category">
                  <span className="categoryText">Kategori:</span>{" "}
                  {freelancer.category.categoryName}
                </p>
              )}
              <p className="skills">
                <span className="skillsText">Skills:</span>{" "}
                {freelancer.skills?.map((s) => s.skillName).join(", ")}
              </p>
             {freelancer.slug?.current ? (
  <Link
    to={`/freelancer/${freelancer.slug.current}`}
    className="readMoreBtn"
  >
    Läs mer
  </Link>
) : (
  <span className="readMoreBtn opacity-50 cursor-not-allowed">Ingen länk</span>
)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FreelancerList;