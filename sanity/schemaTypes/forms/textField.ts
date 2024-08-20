import { defineField, defineType } from 'sanity';
import preview from './fieldPreview';

export default defineType({
  title: 'Text Field',
  name: 'textField',
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
  preview: preview,
});
