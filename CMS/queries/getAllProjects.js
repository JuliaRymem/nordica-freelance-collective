
// Sök efter frilansare baserat på namn, titel eller kompetens
export const searchFunction = `
*[_type == "freelancer" && (
freelancerName match "*$query*" ||
title->titleName match "*$query*" ||
skills[]->skillName match "*$query*"
)]{
_id,
freelancerName,
title->{titleName},
skills[]->{skillName},
picture {
asset->{url}
}}`;

// Hämta alla testimonials (recensioner)
export const getTestimonials = `
*[_type == "testimonial"]{
  name,
  rating,
  comment,
  freelancer->{freelancerName}
}`;