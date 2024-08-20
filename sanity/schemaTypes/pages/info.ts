export default {
  name: 'infoPage',
  title: 'Info',
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
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Content on the info page appears before the FAQ list.',
    },
  ],
};
