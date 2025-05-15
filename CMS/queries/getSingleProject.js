import {client} from '../../frontend/src/sanityClient'

const getSingleProject = (slug) => {
  return client.fetch(
    `*[_type == "freelancer" && slug.current == "${slug}"]{
      "freelancer": {
        _id,
        freelancerName,
        "image": picture.asset->url,
        "title": title->titleName,
        description,
        "skills": skills[]->skillName,
        "Skill Count": count(skills)
      },
      "projects": *[_type == 'project' && references(^._id)]{
        _id,
        projectTitle,
        description,
        customer,
        date,
        status
      },
      "testimonial": *[_type == 'testimonial' && references(^._id)]{
        name,
        "image": image.asset->url,
        comment,
        rating
      }
    }`,
  )
}

export default getSingleProject
