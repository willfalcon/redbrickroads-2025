import preview from './fieldPreview';
export default {
  title: 'Check Boxes',
  name: 'checkBoxes',
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
