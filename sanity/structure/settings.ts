// import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';
import { StructureBuilder } from 'sanity/structure';

export default (S: StructureBuilder) => S.listItem()
  .title('Site Settings')
  .icon(MdSettings)
  .child(
    S.list()
      .title('Site Settings')
      .items([
        S.listItem()
          .title('General Settings')
          .child(
            S.editor()
              .title('General Settings')
              .id('generalSettings')
              .schemaType('siteSettings')
              .documentId('siteSettings')
          ),
        S.listItem()
          .title('Tickets')
          .child(
            S.editor()
              .title('Ticket Options')
              .id('ticketOptions')
              .schemaType('tickets')
              .documentId('ticketOptions')
          ),
        S.listItem()
          .title('Footer')
          .child(
            S.editor()
              .title('Footer Options')
              .id('footerSettings')
              .schemaType('footerSettings')
              .documentId('footerSettings')
          ),
        S.listItem()
          .title('Connect')
          .child(
            S.editor()
              .title('Connect Block')
              .id('connect')
              .schemaType('connect')
              .documentId('connect')
          ),
      ])
  );
