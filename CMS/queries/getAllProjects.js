export const getAllFreelancers = `
   _id,
    freelancerName,
    slug,
    title->{titleName},
    'image':picture.asset->url,
    skills[]->{skillName},
    category->{categoryName},
  }
`
