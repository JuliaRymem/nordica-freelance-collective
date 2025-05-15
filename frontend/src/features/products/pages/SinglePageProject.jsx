import React from "react";
import { useQuery } from "@tanstack/react-query";
import getSingleProject from "../../../../../CMS/queries/getSingleProject";
import FreelancerSinlge from "../components/FreelancerSinlge";
import ProjectsSingle from "../components/ProjectsSingle";
import TestimonialSingle from "../components/TestimonialSingle";
import "../components/singlepageproject.css";

const SinglePageProject = () => {
  // const slug = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["singleProject"],
    queryFn: () => getSingleProject("maja-holmgren"),
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error... {isError.message}</p>;
  }

  return (
    <main className="main-mobile md-container lg-container">
      <FreelancerSinlge data={data[0]?.freelancer} />
      <hr className="md:hidden" />

      <section className="lg:flex flex-row lg:gap-5">
        <ProjectsSingle data={data[0]?.projects} />
        <hr className="md:hidden" />
        <TestimonialSingle data={data[0]?.testimonial} />
      </section>
    </main>
  );
};

export default SinglePageProject;
