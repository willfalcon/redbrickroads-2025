export default {
  name: 'connect',
  title: 'Connect Block',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 100,
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'menu',
      title: 'Connect Menu',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
  ],
};
