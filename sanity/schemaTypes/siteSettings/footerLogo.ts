import { defineField, defineType } from "sanity"

export default defineType({
  name: 'footerLogo',
  title: 'Footer Logo',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      description: `For accessability reasons, doesn't show up in the footer.`,
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
  preview: {
    select: {
      title: 'label',
      media: 'logo',
    },
  },
});
