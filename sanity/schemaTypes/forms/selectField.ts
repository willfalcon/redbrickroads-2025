import { defineArrayMember, defineField, defineType } from 'sanity';
import preview from './fieldPreview';

export default defineType({
  name: 'selectField',
  title: 'Select Field',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'fieldOptions',
      type: 'fieldOptions',
    }),
  ],
  preview,
});
