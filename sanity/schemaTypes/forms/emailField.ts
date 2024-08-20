import preview from './fieldPreview';
export default {
  title: 'Email Field',
  name: 'emailField',
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
