import { FormField } from "@/components/forms/types";
import { defineField, defineType, File } from "sanity";

type EntryField = {
  _key: string,
  name: string,
  value: string,
  file?: File
}

export default defineType({
  name: 'entry',
  title: 'Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{ type: 'form' }],
    }),
    defineField({
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [
        defineField({
          name: 'field',
          title: 'Field',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
            defineField({
              name: 'file',
              title: 'File',
              type: 'file'
            })
          ],
          preview: {
            select: {
              title: 'name',
              value: 'value'
            },
            prepare({title, value}) {
              return {
                title: title.replace(/_/g, ' '),
                subtitle: value
              }
            }
          }
        }),
      ],
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime'
    })
  ],
  preview: {
    select: {
      form: 'form.fields',
      fields: 'fields'
    }, 
    prepare({form, fields}) {
      console.log(form)
      const previewFields = form.filter((field: FormField) => field?.fieldOptions?.previewField);
      const preview = previewFields.map((fieldDef: FormField) => {
        const field = fields.find((field: EntryField) => field.name === fieldDef.name);
        return field;
      });
      const name = preview.filter((field: EntryField) => field?.name?.toLowerCase().includes('name')).map((field: EntryField) => field?.value).join(' ');
      // console.log(preview.filter(field => field.name?.toLowerCase().includes('name')))
      const rest = preview.filter((field: EntryField) => !field?.name?.toLowerCase().includes('name')).map((field: EntryField) => field?.value).join(' - ');
      
      const title = name ? name : rest;
      const subtitle =  name ? rest : '';
      return {title, subtitle}
    }
  }
});