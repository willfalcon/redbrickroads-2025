export default {
  name: 'home',
  title: 'Home',
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
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
};
