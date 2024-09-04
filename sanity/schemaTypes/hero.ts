import { defineField, defineType } from "sanity"

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'altImage',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
    }),
    defineField({
      name: 'heroSubText',
      title: 'Sub Text',
      type: 'string',
    }),
    defineField({
      name: 'heroButton',
      title: 'Hero Button',
      type: 'link',
    }),
  ],
  options: {
    collapsible: true,
  },
});
