import { defineField, defineType } from 'sanity';
import preview from './fieldPreview';
export default defineType({
  title: 'Password Field',
  name: 'passwordField',
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
