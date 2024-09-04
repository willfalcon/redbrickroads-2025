import { defineDocuments, defineLocations, PresentationPluginOptions } from "sanity/presentation";

export const resolve: PresentationPluginOptions['resolve'] = {
  mainDocuments: defineDocuments([
    {
      route: '/',
      filter: `_type == "home"`,
    },
    {
      route: '/info',
      filter: `_type == "infoPage"`, 
    },
    {
      route: '/lineup',
      filter: `_type == 'lineupPage'`
    },
    {
      route: '/:slug',
      filter: `_type == "page" && slug.current == $slug`,
    },
  ]),
  locations: {
    faq: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current'
      },
      resolve: (doc) => ({
        locations: [
          {
            title: 'FAQs',
            href: `/info`
          }
        ]
      })
    })
  },
};