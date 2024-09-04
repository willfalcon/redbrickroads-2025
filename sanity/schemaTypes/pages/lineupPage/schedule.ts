import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: 'schedule',
  title: 'Schedule',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'altImage',
    }),
    defineField({
      name: 'scheduleItems',
      title: 'Schedule Items',
      type: 'array',
      of: [defineArrayMember({ type: 'scheduleItem' })],
    }),
  ],
});
