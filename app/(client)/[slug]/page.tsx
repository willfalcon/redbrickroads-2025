
import Content from '@/components/Content';
import Hero from '@/components/Hero';
import SubNav from '@/components/SubNav';
import { PAGE_QUERYResult } from '@/sanity.types';
import { client, sanityFetch } from '@/sanity/lib/client';
import { PAGE_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';


export default async function Page({params} : { params: { slug: string }}) {
  const pageData = await sanityFetch<PAGE_QUERYResult>({query: PAGE_QUERY, params:{slug: params.slug}});
  if (!pageData) {
    return notFound()
  }
  
  return (
    <>
      {pageData.hero && <Hero {...pageData.hero} hasSubNav={!!pageData.subNav} />}
      {pageData.subNav && <SubNav nav={pageData.subNav} />}
      {pageData.content && <Content className="p-4">{pageData.content}</Content>}
    </>
  );
}
