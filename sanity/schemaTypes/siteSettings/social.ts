import { defineField, defineType } from "sanity"

export default defineType({
  name: 'social',
  title: 'Social Media',
  type: 'object',
  fields: [
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    }),
  ],
});
