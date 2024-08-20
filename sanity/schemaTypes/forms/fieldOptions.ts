export default {
  title: 'Field Options',
  name: 'fieldOptions',
  type: 'object',
  fields: [
    {
      title: 'Half Width',
      name: 'halfWidth',
      type: 'boolean',
    },
    {
      title: 'Required',
      name: 'required',
      type: 'boolean',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Admin Label',
      name: 'adminLabel',
      type: 'string',
      description:
        'Optional. Set a different label for the field if it will be more helpful in form submissions. In address fields or other multi-input fields, this will be prepended to each field name.',
    },
  ],
};
