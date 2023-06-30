export default {
  name: 'subscriber',
  title: 'Subscriber',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'email',
        maxLength: 90,
      },
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
  ],
}
