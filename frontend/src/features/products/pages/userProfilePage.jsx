import { useEffect, useState } from "react";
import { getAllFreelancers } from "../../../../../CMS/queries/getAllProjects"; // Om du definierar din query här
import { client } from "../../../sanityClient"; // om client ligger direkt i src

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
    <div>
      {freelancers.map((freelancer) => (
        <div
          key={freelancer._id}
          className="p-4 bg-gray-100 rounded-md shadow-md mb-4"
        >
          <h2 className="text-xl font-bold">{freelancer.name}</h2>
          <p className="text-sm text-gray-700">{freelancer.title}</p>
          {freelancer.image?.asset?.url ? (
            <img
              src={freelancer.image.asset.url}
              alt={freelancer.name}
              width="150"
              className="rounded-full"
            />
          ) : (
            <img
              src="/path/to/default-image.jpg"
              alt="Default"
              width="150"
              className="rounded-full"
            />
          )}
          <p className="text-sm text-gray-600">
            Kategori: {freelancer.category?.name}
          </p>
          <p className="text-sm text-gray-600">
            Skills:{" "}
            {freelancer.skills?.map((s) => s.name).join(", ") || "Inga angivna"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FreelancerList;
