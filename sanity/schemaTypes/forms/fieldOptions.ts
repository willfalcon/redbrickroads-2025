import { defineField, defineType } from "sanity";

export default defineType({
  title: 'Field Options',
  name: 'fieldOptions',
  type: 'object',
  fields: [
    defineField({
      title: 'Half Width',
      name: 'halfWidth',
      type: 'boolean',
    }),
    defineField({
      title: 'Required',
      name: 'required',
      type: 'boolean',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Preview field',
      name: 'previewField',
      type: 'boolean',
      description: "Use this field to build previews in the entries list."
    }),
    defineField({
      title: 'Admin Label',
      name: 'adminLabel',
      type: 'string',
      description:
        'Optional. Set a different label for the field if it will be more helpful in form submissions. In address fields or other multi-input fields, this will be prepended to each field name.',
    }),
  ],
});
