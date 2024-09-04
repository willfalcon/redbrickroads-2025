import { SpecialBlock } from "@/sanity.types";
import { defineField, defineType } from "sanity"


export default defineType({
  name: 'specialBlock',
  title: 'Content Block',
  type: 'object',
  fieldsets: [{ name: 'displayOptions', title: 'Display Options' }],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'reverse',
      title: 'Reverse Layout',
      type: 'boolean',
      fieldset: 'displayOptions',
    }),
    defineField({
      name: 'backgroundPattern',
      title: 'Background Pattern',
      type: 'boolean',
      fieldset: 'displayOptions',
    }),
    defineField({
      name: 'brickRoadBg',
      title: 'Brick Road Background',
      type: 'boolean',
      fieldset: 'displayOptions',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Required to use anchor links to specific sections, i.e. in the subnav on a page.',
      options: {
        source: 'content',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
    }),
    defineField({
      name: 'copy',
      title: 'Body',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Button',
      type: 'link',
    }),
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
  },
  // components: {
  //   preview: Preview
  // }
});
