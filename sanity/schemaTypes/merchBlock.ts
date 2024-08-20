export default {
  name: 'merchBlock',
  title: 'Merch Block',
  type: 'object',
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
      description:
        'Required to use anchor links to specific sections, i.e. in the subnav on a page.',
      options: {
        source: (doc, options) => options.parent.heading,
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'altImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'heading',
    },
  },
};
