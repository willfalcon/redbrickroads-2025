import { defineField, defineType } from 'sanity';
import preview from './fieldPreview';

export default defineType({
  title: 'Text Field',
  name: 'textField',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'fieldOptions',
      type: 'fieldOptions',
    }),
  ],
  preview: preview,
});
