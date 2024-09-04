import { client } from "@/sanity/lib/client";
import { REFERENCE_QUERY } from "@/sanity/lib/queries";

export async function GET(request: Request, {params}: {params: {id: string}}) {
  console.log(params)
  try {
    const res = await client.fetch(REFERENCE_QUERY, {ref: params.id});
    return Response.json(res);
  } catch(err) {
    console.error(err);
    return Response.json(err);
  }
}