import { defineField, defineType } from "sanity"

export default defineType({
  name: 'altImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
});
