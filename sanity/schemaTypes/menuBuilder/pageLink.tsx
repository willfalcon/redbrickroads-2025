import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'pageLink',
  title: 'Page Link',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'home' }, { type: 'lineupPage' }],
    }),
    defineField({
      name: 'anchor',
      title: 'Anchor Link',
      type: 'string',
      // inputComponent: AnchorLink,
    }),
    defineField({
      name: 'externalUrl',
      title: 'External Url',
      type: 'url',
    }),
    defineField({
      name: 'subMenu',
      title: 'Sub Menu',
      type: 'array',
      of: [defineArrayMember({ type: 'pageLink' })],
    }),
  ],
});
