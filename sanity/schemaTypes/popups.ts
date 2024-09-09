import { defineField, defineType } from "sanity";
import { randomString } from "../lib/utils";

export default defineType({
  name: 'popup',
  title: 'Popups',
  type: 'document',
  fieldsets: [
    {name: 'details', title: 'Details'},
    {name: 'scheduling', title: 'Scheduling'}
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'textOnly',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'link'
    }),
    defineField({
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{type: 'form'}]
    }),
    defineField({
      name: 'location',
      title: 'location',
      type: 'string',
      options: {
        list: [
          {title: 'Bottom Left', value: 'bottom-left'},
          {title: 'Bottom Center', value: 'bottom-center'},
          {title: 'Bottom Right', value: 'bottom-right'},
          {title: 'Center Left', value: 'center-left'},
          {title: 'Center', value: 'center'},
          {title: 'Center Right', value: 'center-right'},
          {title: 'Top Left', value: 'top-left'},
          {title: 'Top Center', value: 'top-center'},
          {title: 'Top Right', value: 'top-right'},
        ]
      },
      initialValue: 'bottom-left',
      fieldset: 'details'
    }),
    defineField({
      name: 'delay',
      title: 'Delay',
      type: 'number',
      validation: rule => rule.precision(2),
      description: 'Time before the popup appears in seconds.',
      fieldset: 'details',
    }),
    defineField({
      name: 'cookieId',
      title: 'Cookie ID',
      type: 'slug',
      description: `The ID of the cookie when a user closes the popup. If this is changed, the popup will show for all users and they'll have to close it again.`,
      fieldset: 'details',
      options: {
        source: () => randomString(5),
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'starts',
      title: 'Starts',
      type: 'datetime',
      fieldset: 'scheduling',
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'h:mm a'
      }
    }),
    defineField({
      name: 'ends',
      title: 'Ends',
      type: 'datetime',
      fieldset: 'scheduling',
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'h:mm a'
      }
    })
  ]
})