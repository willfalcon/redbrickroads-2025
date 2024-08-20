export default {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    {
      name: 'footerNav',
      title: 'Footer Menu',
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
    },
    {
      name: 'footerLogos',
      title: 'Footer Logos',
      type: 'array',
      of: [{ type: 'footerLogo' }],
    },
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'footerSponsor',
    },
  ],
};
