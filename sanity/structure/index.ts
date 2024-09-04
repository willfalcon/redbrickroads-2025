import type {ListItemBuilder, StructureResolver} from 'sanity/structure'

import settings from './settings';
import pages from './pages';
import forms from './forms';

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
    'form',
    'entry'
  ].includes(listItem.getId()!);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title('Red Brick Roads')
    .items([
      settings(S), 
      S.divider(),
      pages(S),
      forms(S),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
