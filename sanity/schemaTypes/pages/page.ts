import { GrDocumentText } from 'react-icons/gr';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Regular Pages',
  type: 'document',
  icon: GrDocumentText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'subNav',
      title: 'Sub Nav',
      type: 'array',
      of: [defineArrayMember({ type: 'menuItem' })],
    }),
    // {
    //   name: 'blocks',
    //   title: 'Content Blocks',
    //   type: 'array',
    //   of: [{ type: 'contentBlock' }],
    //   options: {
    //     editModal: 'fullscreen',
    //   },
    // },
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
});
