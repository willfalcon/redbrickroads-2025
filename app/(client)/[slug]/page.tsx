import ErrorPage from '@/components/404';
import Content from '@/components/Content';
import Hero from '@/components/Hero';
import { PAGE_QUERYResult } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { PAGE_QUERY } from '@/sanity/lib/queries';


export default async function Page({params} : { params: { slug: string }}) {
  const pageData = await client.fetch<NonNullable<PAGE_QUERYResult>>(PAGE_QUERY, {slug: params.slug});
  if (!pageData) {
    return <ErrorPage />
  }
  return (
    <div>
      {pageData.hero && <Hero hero={pageData.hero} />}
      {pageData.content && <Content>{pageData.content}</Content>}
    </div>
  );
}
