import { defineField, defineType } from "sanity"

export default defineType({
  name: 'merchBlock',
  title: 'Merch Block',
  type: 'object',
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
      description:
        'Required to use anchor links to specific sections, i.e. in the subnav on a page.',
      options: {
        source: (doc, options) => options.parent.heading,
        maxLength: 100,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'heading',
    },
  },
});
