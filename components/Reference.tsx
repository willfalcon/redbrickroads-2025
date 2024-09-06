import { client } from "@/sanity/lib/client";
import Form from "./forms/Form";
import { REFERENCE_QUERY } from "@/sanity/lib/queries";
import { PropsWithChildren } from "react";
import File from "./File";
import { REFERENCE_QUERYResult } from "@/sanity.types";


export default async function Reference(props: PropsWithChildren & {_ref?: string | undefined}) {

  const {_ref, children} = props;
  const referenceData = await client.fetch<REFERENCE_QUERYResult>(REFERENCE_QUERY, {ref: _ref});
  if (referenceData?._type == 'form') {
    return <Form {...referenceData} />;
  }  
  if (referenceData?._type == 'sanity.fileAsset') {
    return <File url={referenceData.url as string} children={children}/>
  }
}