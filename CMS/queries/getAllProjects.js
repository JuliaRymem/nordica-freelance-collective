export const getAllFreelancers = `
 *[_type == "freelancer"]{
   _id,
    freelancerName,
    slug,
    title->{titleName},
    'image':picture.asset->url,
    skills[]->{skillName},
    category->{categoryName},
  }
`
