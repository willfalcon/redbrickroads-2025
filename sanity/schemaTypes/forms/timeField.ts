import { defineField, defineType } from 'sanity';
import preview from './fieldPreview';
export default defineType({
  title: 'Time Field',
  name: 'timeField',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'fieldOptions',
      type: 'fieldOptions',
    }),
  ],
  preview,
});
