import { GoPerson } from 'react-icons/go';

export default {
  name: 'artist',
  title: 'Artists',
  type: 'document',
  icon: GoPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'altImage',
    },
    {
      name: 'local',
      title: 'Mississippi Artist',
      type: 'boolean',
    },
    {
      name: 'spotify',
      title: 'Spotify Link',
      type: 'url',
    },
  ],
};
