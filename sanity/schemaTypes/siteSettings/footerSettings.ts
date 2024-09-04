import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'footerNav',
      title: 'Footer Menu',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'menuItem',
        }),
      ],
    }),
    defineField({
      name: 'footerLogos',
      title: 'Footer Logos',
      type: 'array',
      of: [defineArrayMember({ type: 'footerLogo' })],
    }),
    defineField({
      name: 'sponsor',
      title: 'Sponsor',
      type: 'footerSponsor',
    }),
  ],
});
