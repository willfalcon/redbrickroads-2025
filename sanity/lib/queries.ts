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

export const MAIN_NAV_QUERY = groq`
  *[_type == 'siteSettings'][0].mainMenu[] {
    ...,
    link-> {
      title, slug
    },
    subMenu[] {
      ...,
      link -> {
        title, slug
      }
    }
  } 
`;

const HERO_FRAGMENT = groq`
    hero {
      heroButton {
        label,
        url
      },
      heroText,
      heroSubText,
      heroImage { 
        hotspot,
        crop,
        asset-> { 
          metadata {
            lqip
          },          
          _id
        },
        alt
      }
    }
`;
export const HOME_QUERY = groq`
  *[_type == "home"][0] {
    ${HERO_FRAGMENT},
    content[]
  }
`;

export const PAGE_QUERY = groq`
  *[_type == 'page' && slug.current == $slug][0] {
    id,
    title,
    ${HERO_FRAGMENT},
    subNav[] {
      ...,
      link-> {
        title, slug
      },
      subMenu[] {
        ...,
        link -> {
          title, slug
        }
      }
    },
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

export const INFO_QUERY = groq`
  *[_type == 'infoPage'][0] {
    title,
    content
  }
`

export const FAQS_QUERY = groq`
  *[_type == 'faq'][] {
    ...,
    answer[] {
      ...,
      markDefs[] {
        ...,
        'slug': url->slug.current
      }
    }
  }
`

export const TICKETS_QUERY = groq`
  *[_type == 'tickets'][0] {
    heading,
    text,
    ticketOptions[] {
      _id,
      title,
      buyText,
      description[],
      image,
      price
    }
  }
`

export const CONNECT_QUERY = groq`
  {
    "contact": *[_type == 'siteSettings'][0].contact {
      phone,
      social,
    },
    "connect": *[_type == 'connect'][0] {
      heading,
      text,
      slug,
      menu[] {
        ...,
        link-> {
          title, slug
        }
      }
    }
  }
`

export const FOOTER_QUERY = groq`
  *[_type == 'footerSettings'][0] {
    footerLogos[] {
      ..., 
      _key
    },
    sponsor
  }
`;

export const FOOTER_NAV_QUERY = groq`
  *[_type == 'footerSettings'][0].footerNav[] {
    ...,
    link-> {
      title, slug
    },
    subMenu[] {
      ...,
      link -> {
        title, slug
      }
    }
  } 
`

export const REFERENCE_QUERY = groq`
  *[_id == $ref][0] {
    ...
  }
`