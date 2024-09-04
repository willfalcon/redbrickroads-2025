import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: 'lineupPage',
  title: 'Lineup',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'schedules',
      title: 'Schedules',
      type: 'array',
      of: [defineArrayMember({ type: 'schedule' })],
    }),
  ],
});
