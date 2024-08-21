import ErrorPage from '@/components/404';
import Content from '@/components/Content';
import Hero from '@/components/Hero';
import SubNav from '@/components/SubNav';
import { PAGE_QUERYResult } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { PAGE_QUERY } from '@/sanity/lib/queries';


export default async function Page({params} : { params: { slug: string }}) {
  const pageData = await client.fetch(PAGE_QUERY, {slug: params.slug});
  if (!pageData) {
    return <ErrorPage />
  }
  return (
    <>
      {pageData.hero && <Hero {...pageData.hero} hasSubNav={pageData.subNav} />}
      {pageData.subNav && <SubNav nav={pageData.subNav} />}
      {pageData.content && <Content className="p-4">{pageData.content}</Content>}
    </>
  );
}
