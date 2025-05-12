export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'comment', title: 'Comment', type: 'text'},
    {name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(1).max(5)},
    {name: 'freelancer', title: 'Freelancer', type: 'reference', to: [{type: 'freelancer'}]},
  ],
}
