import { defineType } from "sanity";

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'home' },
        { type: 'lineupPage' },
        { type: 'infoPage' },
      ],
    },
    {
      name: 'anchor',
      title: 'Anchor Link',
      type: 'string',
      // inputComponent: AnchorLink,
    },
    {
      name: 'externalUrl',
      title: 'External Url',
      type: 'url',
    },
    {
      name: 'subMenu',
      title: 'Sub Menu',
      type: 'array',
      of: [{ type: 'menuItem' }],
    },
    {
      name: 'buttonStyles',
      title: 'Button Styles',
      type: 'boolean',
    },
  ],
});
