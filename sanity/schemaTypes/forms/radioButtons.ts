import { defineArrayMember, defineField, defineType } from 'sanity';
import preview from './fieldPreview';
export default defineType({
  title: 'Radio Buttons',
  name: 'radioButtons',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: rule => rule.required(),
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
