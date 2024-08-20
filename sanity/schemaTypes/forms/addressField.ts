import preview from './fieldPreview';
export default {
  title: 'Address Field',
  name: 'addressField',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      name: 'fieldOptions',
      type: 'fieldOptions',
    },
  ],
  preview,
};
