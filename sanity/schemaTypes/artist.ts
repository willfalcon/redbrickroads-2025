import { GoPerson } from 'react-icons/go';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'artist',
  title: 'Artists',
  type: 'document',
  icon: GoPerson,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
    }),
    defineField({
      name: 'local',
      title: 'Mississippi Artist',
      type: 'boolean',
    }),
    defineField({
      name: 'spotify',
      title: 'Spotify Link',
      type: 'url',
    }),
  ],
});
