import { GrDocumentText } from 'react-icons/gr';

export default {
  name: 'page',
  title: 'Regular Pages',
  type: 'document',
  icon: GrDocumentText,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'subNav',
      title: 'Sub Nav',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
    // {
    //   name: 'blocks',
    //   title: 'Content Blocks',
    //   type: 'array',
    //   of: [{ type: 'contentBlock' }],
    //   options: {
    //     editModal: 'fullscreen',
    //   },
    // },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
};
