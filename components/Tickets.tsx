import { client } from "@/sanity/lib/client"
import { TICKETS_QUERY } from "@/sanity/lib/queries"
import TicketClipPath from "./TicketClipPath";
import { TicketOption as OptionType } from "@/sanity.types";
import TicketOption from "./TicketOption";
import Content from "./Content";

export default async function Tickets() {

  const {heading, ticketOptions, text} = await client.fetch(TICKETS_QUERY);

  interface OptionWithID extends OptionType {
    _key: string
  }

  return (
    <section id="tickets" className="bg-white p-12 mt-8 text-center w-full">
      <h2 className="uppercase text-[4rem] text-black">{heading || 'Tickets'}</h2>
      <TicketClipPath />
      {/* <ul className="mt-[75px] w-[1200px] max-w-full mx-auto md:grid md:items-stretch grid-cols-[repeat(3,1fr)]"> */}
      <ul className="mt-[75px] w-[1200px] max-w-full mx-auto md:grid md:grid-cols-3">
        {ticketOptions.map((option: OptionWithID) => {
          return <TicketOption key={option._key} {...option} />;
        })}
      </ul>
      <Content className="w-content max-w-full mx-auto font-heading uppercase">
        {text}
      </Content>
    </section>
  );
}