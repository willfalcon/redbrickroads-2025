import { RiQuestionAnswerLine } from 'react-icons/ri';

export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: RiQuestionAnswerLine,
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 100,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'textOnly',
    },
  ],
};
