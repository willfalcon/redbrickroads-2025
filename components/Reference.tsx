import { client } from "@/sanity/lib/client";
import Form from "./forms/Form";
import { REFERENCE_QUERY } from "@/sanity/lib/queries";


export default async function Reference({_ref}: {_ref: string}) {
  const referenceData = await client.fetch(REFERENCE_QUERY, {ref: _ref});

  
  if (referenceData._type == 'form') {
  
    return <Form {...referenceData} />;
  }  
}