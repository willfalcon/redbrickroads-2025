import type {ListItemBuilder, StructureResolver} from 'sanity/structure'

import settings from './structure/settings';
import pages from './structure/pages';

const hiddenDocTypes = (listItem: ListItemBuilder) =>
  ![
    'siteSettings',
    'tickets',
    'footerSettings',
    'connect',
    'home',
    'lineupPage',
    'infoPage',
    // 'page',
  ].includes(listItem.getId()!);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title('Red Brick Roads')
    .items([
      settings(S), 
      S.divider(),
      pages(S),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
