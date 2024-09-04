import { defineField, defineType } from "sanity"

export default defineType({
  name: 'ticketOption',
  title: 'Ticket Option',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'buyText',
      title: 'Buy Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buyLink',
      title: 'Buy Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
