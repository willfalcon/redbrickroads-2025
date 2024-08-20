export default {
  name: 'scheduleItem',
  title: 'Schedule Item',
  type: 'object',
  fields: [
    {
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'subLabel',
      title: 'Sub Label',
      type: 'string',
    },
    {
      name: 'eventType',
      title: 'Type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Artist', value: 'artist' },
          { title: 'Event', value: 'event' },
          { title: 'Info', value: 'info' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'time',
    },
  },
};
