import preview from './fieldPreview';
export default {
  title: 'Phone Field',
  name: 'phoneField',
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
