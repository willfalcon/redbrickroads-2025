export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'altImage',
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
    },
    {
      name: 'heroSubText',
      title: 'Sub Text',
      type: 'string',
    },
    {
      name: 'heroButton',
      title: 'Hero Button',
      type: 'link',
    },
  ],
  options: {
    collapsible: true,
  },
};
