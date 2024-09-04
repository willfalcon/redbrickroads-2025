import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'home' },
        { type: 'lineupPage' },
        { type: 'infoPage' },
      ],
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
      of: [defineArrayMember({ type: 'menuItem' })],
    }),
    defineField({
      name: 'buttonStyles',
      title: 'Button Styles',
      type: 'boolean',
    }),
  ],
});
