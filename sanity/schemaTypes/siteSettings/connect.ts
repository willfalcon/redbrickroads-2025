import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: 'connect',
  title: 'Connect Block',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'menu',
      title: 'Connect Menu',
      type: 'array',
      of: [defineArrayMember({ type: 'menuItem' })],
    }),
  ],
});
