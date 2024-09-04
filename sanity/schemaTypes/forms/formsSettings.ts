import { defineField, defineType } from "sanity";

export default defineType({
  name: 'formsSettings',
  title: 'Forms Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'submissionsEmail',
      title: 'Submissions Email',
      type: 'string',
      description: 'Default email form submissions will be sent to.',
      validation: Rule => Rule.email()
    }),
    defineField({
      name: 'apiKey',
      title: 'API Key',
      type: 'string'
    })
  ]
});