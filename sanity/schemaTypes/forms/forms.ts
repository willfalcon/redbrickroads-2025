import { AiOutlineBuild } from 'react-icons/ai';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'form',
  title: 'Forms',
  type: 'document',
  icon: AiOutlineBuild,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'textOnly', 
    }),
    defineField({
      name: 'fields',
      title: 'Form Builder',
      type: 'array',
      of: [
        defineArrayMember({ type: 'textField' }),
        defineArrayMember({ type: 'textArea' }),
        defineArrayMember({ type: 'emailField' }),
        defineArrayMember({ type: 'phoneField' }),
        defineArrayMember({ type: 'urlField' }),
        defineArrayMember({ type: 'passwordField' }),
        defineArrayMember({ type: 'addressField' }),
        defineArrayMember({ type: 'checkBoxes' }),
        defineArrayMember({ type: 'radioButtons' }),
        defineArrayMember({ type: 'selectField' }),
        defineArrayMember({ type: 'fileUpload' }),
        defineArrayMember({ type: 'timeField' }),
        defineArrayMember({ type: 'dateField' }),
        defineArrayMember({ type: 'dateTimeField' }),
      ],
    }),
    defineField({
      name: 'submitText',
      title: 'Submit Text',
      type: 'string',
      description: 'Text on the "Submit" button. Default is "Submit."',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      description: 'Text shown after a successful submission.',
    }),
  ],
});
