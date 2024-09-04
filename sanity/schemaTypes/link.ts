import { defineField, defineType } from "sanity";

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      deprecated: {reason: 'Use External URL or Page instead.'}
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url'
    }),
    defineField({
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'home' }, { type: 'lineupPage' }, { type: 'infoPage' }],
    }),
    defineField({
      name: 'label',
      title: 'Text',
      type: 'string',
    }),
  ],
});
