
export const getAllFreelancers = `
  *[_type == "freelancer"]{
    _id,
    name,
    slug,
    title,
    image {
      asset->{url}
    },
    skills[]->{name},
    category->{name}
  }
`;