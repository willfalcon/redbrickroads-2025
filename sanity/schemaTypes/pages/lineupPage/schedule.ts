export default {
  name: 'schedule',
  title: 'Schedule',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'altImage',
    },
    {
      name: 'scheduleItems',
      title: 'Schedule Items',
      type: 'array',
      of: [{ type: 'scheduleItem' }],
    },
  ],
};
