import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: 'tickets',
  title: 'Tickets',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'ticketOptions',
      title: 'Ticket Options',
      type: 'array',
      of: [defineArrayMember({ type: 'ticketOption' })],
    }),
    defineField({
      name: 'text',
      title: 'Text Below Ticket Options',
      type: 'blockContent',
    }),
  ],
});
