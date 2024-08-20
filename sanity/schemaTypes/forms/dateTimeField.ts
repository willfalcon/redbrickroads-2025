import preview from './fieldPreview';
export default {
  title: 'Date Time Field',
  name: 'dateTimeField',
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
