export default {
  name: 'footerSponsor',
  title: 'Sponsor',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
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
};
