import Content from "@/components/Content";
import FAQ from "@/components/FAQ";
import PageTitle from "@/components/PageTite";
import { Faq as FaqType, FAQS_QUERYResult, INFO_QUERYResult } from "@/sanity.types"
import { client } from "@/sanity/lib/client"
import { FAQS_QUERY, INFO_QUERY } from "@/sanity/lib/queries"

export default async function InfoPage() {
  const pageData = await client.fetch<INFO_QUERYResult>(INFO_QUERY);
  const faqs = await client.fetch<[FaqType]>(FAQS_QUERY);

  return (
    <div>
      <PageTitle>{pageData?.title}</PageTitle>
      {pageData?.content && <Content className="p-4">{pageData.content}</Content>}
      <div className="p-4">
        {faqs.map(faq => (
          <FAQ key={faq._id} {...faq} />
        ))}
      </div>
    </div>
  );
}