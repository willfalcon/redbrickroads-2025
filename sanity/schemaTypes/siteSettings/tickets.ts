export default {
  name: 'tickets',
  title: 'Tickets',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'ticketOptions',
      title: 'Ticket Options',
      type: 'array',
      of: [{ type: 'ticketOption' }],
    },
    {
      name: 'text',
      title: 'Text Below Ticket Options',
      type: 'blockContent',
    },
  ],
};
