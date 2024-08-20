export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'mainMenu',
      title: 'Main Menu',
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
    },
    {
      name: 'headerText',
      title: 'Header Text',
      type: 'blockContent',
    },
    {
      name: 'contact',
      title: 'Contact Info',
      type: 'contactInfo',
    },
  ],
};
