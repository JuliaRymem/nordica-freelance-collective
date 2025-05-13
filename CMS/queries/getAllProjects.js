export const searchFunction = `
*[_type == "freelancer" && (
freelancerName match "*query*" ||
title->titleName match "*query*" ||
skills[]->skillName match "*query*"
)]{
_id,
freelancerName,
title->{titleName},
skills[]->{skillName},
picture {
asset->{url}
}}`;