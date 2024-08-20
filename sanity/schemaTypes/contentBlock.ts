import Preview from '../components/ContentBlockPreview';

export default {
  name: 'specialBlock',
  title: 'Content Block',
  type: 'object',
  fieldsets: [{ name: 'displayOptions', title: 'Display Options' }],
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'reverse',
      title: 'Reverse Layout',
      type: 'boolean',
      fieldset: 'displayOptions',
    },
    {
      name: 'backgroundPattern',
      title: 'Background Pattern',
      type: 'boolean',
      fieldset: 'displayOptions',
    },
    {
      name: 'brickRoadBg',
      title: 'Brick Road Background',
      type: 'boolean',
      fieldset: 'displayOptions',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Required to use anchor links to specific sections, i.e. in the subnav on a page.',
      options: {
        source: (doc, options) => options.parent.heading,
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'altImage',
    },
    {
      name: 'copy',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Button',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      reverse: 'reverse',
      text: 'copy',
      buttonText: 'link.label',
      media: 'image',
      mediaAsset: 'image.asset',
      // mediaMetadata: 'image.asset.metadata',
    },
    component: Preview,
  },
};
