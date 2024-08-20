import Content from "@/components/Content";
import Hero from "@/components/Hero";
import { HOME_QUERYResult } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function Home() {

  const homeData = await client.fetch<NonNullable<HOME_QUERYResult>>(HOME_QUERY);

  return (
    <div>
      {homeData.hero && <Hero hero={homeData.hero} />}
      {homeData.content && <Content>{homeData.content}</Content>}
    </div>
  );
}
