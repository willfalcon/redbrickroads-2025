import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'mainMenu',
      title: 'Main Menu',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'menuItem',
        }),
      ],
    }),
    defineField({
      name: 'headerText',
      title: 'Header Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Info',
      type: 'contactInfo',
    }),
  ],
});
