import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getSingleProject from "../../../../../CMS/queries/getSingleProject";
import FreelancerSinlge from "../components/FreelancerSinlge";
import ProjectsSingle from "../components/ProjectsSingle";
import TestimonialSingle from "../components/TestimonialSingle";
import TestimonialModal from "../components/testimonial/TestimonialModal";
import "../../styles/singlepageproject.css";
import { useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const SinglePageProject = () => {
  const { slug } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const { isUserLoggedIn } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleProject"],
    queryFn: () => getSingleProject(`${slug}`),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error... {error.message}</p>;
  }

  return (
    <main className="main-mobile md-container lg-container">
      <FreelancerSinlge data={data[0]?.freelancer} />
      <hr className="md:hidden" />

      <section className="lg:flex flex-col lg:gap-5">
        <ProjectsSingle data={data[0]?.projects} />
        <hr className="md:hidden mb-10" />
        <div className="md:mt-4">
          <TestimonialSingle data={data[0]?.testimonial} />
        </div>
      </section>
      {isUserLoggedIn && (
        <button
          onClick={() => setModalOpen(true)}
          className="shadow-xl rounded-md p-3 max-w-md mx-auto cursor-pointer bg-gradient-turquoise-blue text-whitetext-shadow-lg hover:text-white/40 transition-transform duration-300 hover:scale-110"
        >
          Skriv en Testimonial
        </button>
      )}

      <TestimonialModal
        freelancerId={data[0]?.freelancer?._id}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
};

export default SinglePageProject;
