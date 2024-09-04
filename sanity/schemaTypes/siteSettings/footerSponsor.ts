import { defineField, defineType } from "sanity";

export default defineType({
  name: 'footerSponsor',
  title: 'Sponsor',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'altImage',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
});
