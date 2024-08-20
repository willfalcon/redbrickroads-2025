import preview from './fieldPreview';

export default {
  name: 'selectField',
  title: 'Select Field',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'fieldOptions',
      type: 'fieldOptions',
    },
  ],
  preview,
};
