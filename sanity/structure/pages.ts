import { StructureBuilder } from 'sanity/structure';

export default (S: StructureBuilder) => S.listItem()
  .title('Pages')
  .child(
    S.list()
      .title('Pages')
      .items([
        S.listItem()
          .title('Home')
          .child(
            S.editor()
              .title('Home')
              .id('home')
              .schemaType('home')
              .documentId('home')
          ),
        S.listItem()
          .title('Lineup')
          .child(
            S.editor()
              .title('Lineup')
              .id('lineup')
              .schemaType('lineupPage')
              .documentId('lineup')
          ),
        S.listItem()
          .title('Info')
          .child(
            S.editor()
              .title('Info')
              .id('info')
              .schemaType('infoPage')
              .documentId('info')
          ),
      ])
  );
