export default {
  name: 'ticketOption',
  title: 'Ticket Option',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'altImage',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'buyText',
      title: 'Buy Button Text',
      type: 'string',
    },
    {
      name: 'buyLink',
      title: 'Buy Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
