export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'projectTitle', title: 'Project Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'category', title: 'Category', type: 'reference', to: [{type: 'category'}]},
    {name: 'customer', title: 'Customer', type: 'string'},
    {
      name: 'skill',
      title: 'Skill',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'freelancer',
      title: 'Freelancer',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'freelancer'}]}],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'title'}]}],
    },
    {name: 'date', title: 'Date', type: 'date'},
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Not started', value: 'not_started'},
          {title: 'In progress', value: 'in_progress'},
          {title: 'Completed', value: 'completed'},
        ],
        layout: 'dropdown',
      },
    },
  ],
}
