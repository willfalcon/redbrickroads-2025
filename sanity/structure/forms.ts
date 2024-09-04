import { AiOutlineBuild } from "react-icons/ai";
import { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => S.listItem()
  .title('Forms')
  .icon(AiOutlineBuild)
  .child(
    S.list()
      .title('Forms')
      .items([
        S.listItem()
          .title('Forms Settings')
          .child(
            S.editor()
            .title('Forms Settings')
            .id('formsSettings')
            .schemaType('formsSettings')
            .documentId('formsSettings')
          ),
        S.listItem()
          .title('Forms')
          .child(
            S.documentTypeList('form')
          ),
        S.listItem()
          .title('Entries')
          .child(
            S.documentList()
              .title('Entries')
              .schemaType('entry')
              .filter('_type == "form"')
              .child(
                (id) => S.documentList()
                  .title('Entries')
                  .schemaType('entry')
                  .filter('_type == "entry" && $id == form._ref')
                  .params({id}))
          ),
        S.listItem()
          .title('All Entries')
          .child(
            S.documentTypeList('entry')
          )
      ])
  );