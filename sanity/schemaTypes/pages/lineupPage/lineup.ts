export default {
  name: 'lineupPage',
  title: 'Lineup',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'schedules',
      title: 'Schedules',
      type: 'array',
      of: [{ type: 'schedule' }],
    },
  ],
};
