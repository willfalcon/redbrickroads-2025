export default {
  name: 'footerLogo',
  title: 'Footer Logo',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      description: `For accessability reasons, doesn't show up in the footer.`,
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'altImage',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'label',
      media: 'logo',
    },
  },
};
