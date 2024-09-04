import Content from "@/components/Content";
import Hero from "@/components/Hero";
import { HOME_QUERYResult } from "@/sanity.types";

import { client, sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";


export default async function Home() {

  const homeData = await sanityFetch<HOME_QUERYResult>({query: HOME_QUERY});

  return (
    <>
      {homeData?.hero && <Hero {...homeData.hero} />}
      {homeData?.content && <Content>{homeData.content}</Content>}
    </>
  );
}
