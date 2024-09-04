import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: 'scheduleItem',
  title: 'Schedule Item',
  type: 'object',
  fields: [
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'subLabel',
      title: 'Sub Label',
      type: 'string',
    }),
    defineField({
      name: 'eventType',
      title: 'Type',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Artist', value: 'artist' },
          { title: 'Event', value: 'event' },
          { title: 'Info', value: 'info' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'time',
    },
  },
});
