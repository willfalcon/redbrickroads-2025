export default {
  name: 'altImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
