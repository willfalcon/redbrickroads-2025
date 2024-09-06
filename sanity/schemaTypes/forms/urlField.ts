import { defineField, defineType } from 'sanity';
import preview from './fieldPreview';
export default defineType({
  title: 'URL Field',
  name: 'urlField',
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
  preview,
});
