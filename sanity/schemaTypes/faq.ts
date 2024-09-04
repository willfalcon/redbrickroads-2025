import { RiQuestionAnswerLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: RiQuestionAnswerLine,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 100,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'textOnly',
    }),
  ],
});
