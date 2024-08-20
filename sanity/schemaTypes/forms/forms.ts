import { AiOutlineBuild } from 'react-icons/ai';

export default {
  name: 'form',
  title: 'Forms',
  type: 'document',
  icon: AiOutlineBuild,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'fields',
      title: 'Form Builder',
      type: 'array',
      of: [
        { type: 'textField' },
        { type: 'textArea' },
        { type: 'emailField' },
        { type: 'phoneField' },
        { type: 'addressField' },
        { type: 'checkBoxes' },
        { type: 'radioButtons' },
        { type: 'selectField' },
        { type: 'fileUpload' },
        { type: 'timeField' },
        { type: 'dateField' },
        { type: 'dateTimeField' },
      ],
    },
    {
      name: 'submitText',
      title: 'Submit Text',
      type: 'string',
      description: 'Text on the "Submit" button. Default is "Submit."',
    },
    {
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      description: 'Text shown after a successful submission.',
    },
  ],
};
