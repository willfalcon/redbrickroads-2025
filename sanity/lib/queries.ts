import { groq } from 'next-sanity';

export const HEADER_QUERY = groq`
  *[_type == "siteSettings"][0] {
    headerText,
    mainMenu[] {
      label,
      buttonStyles,
      anchor,
      externalUrl,
      _key,
      link-> {
        _type,
        id,
        slug
      }
    }
  }
`;

export const HOME_QUERY = groq`
  *[_type == "home"][0] {
    hero {
      _type,
      heroButton {
        label,
        url
      },
      heroText,
      heroSubText,
      heroImage {
        ...,
        asset-> {
          ...,
        }
      }
    },
    content[]
  }
`;

export const PAGE_QUERY = groq`
  *[_type == 'page' && slug.current == $slug][0] {
    id,
    title,
    hero {
      _type,
      heroButton {
        label,
        url
      },
      heroText,
      heroSubText,
      heroImage {
        ...,
        asset-> {
          ...,
        }
      }
    },
    subNav[],
    content[]
  }
`;

export const LINEUP_QUERY = groq`
  *[_type == 'lineupPage'][0] {
    title,
    schedules[] {
      _key,
      heading,
      backgroundImage,
      scheduleItems[] {
        _key,
        label,
        subLabel,
        time,
        eventType
      },
      _type
    }
  }
`;

export const SCHEDULES_QUERY = groq`
  *[_type == 'lineupPage'][0].schedules
`

export const ARTISTS_QUERY = groq`
  *[_type == 'artist'][] {
    _id,
    name,
    local,
    spotify,
    image
  }
`