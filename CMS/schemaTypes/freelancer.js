export default {
  name: 'freelancer',
  title: 'Freelancer',
  type: 'document',
  fields: [
    {
      name: 'freelancerName',
      title: 'Freelancer Name',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'reference',
      to: [{type: 'title'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    },
  ],
}
