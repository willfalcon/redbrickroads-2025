import { TicketOption as OptionType } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Content from "./Content";
import Button from "./Button";
import { createDataAttribute } from "next-sanity";


export default function TicketOption({buyLink, buyText, price, title, image, description, index}: OptionType & {index: number}) {

  const attr = createDataAttribute({
    id: 'ticketOptions',
    type: 'tickets',
    path: `ticketOptions[${index}]`,
  });

  return (
    <li className="bg-blue pt-8 px-8 mb-24 h-full md:mx-8 md:mb-40" data-sanity={attr()}>
      {image && (
        <Image className="w-[250px] mx-auto mt-[-75px]" src={urlFor(image).width(250).height(250).url()} width={250} height={250} alt={image?.alt || buyText || ''} style={{ clipPath: `url(#clipPath)` }} data-sanity={attr('image')} />
      )}
      <h3 className="font-heading uppercase" data-sanity={attr('title')}>{title}</h3>
      {price && <span className="font-bold font-heading" data-sanity={attr('price')}>{price}</span>}
      <Content className="mb-4 font-headingRegular" data-sanity={attr('description')}>{description}</Content>
      <Button className="inline-block translate-y-1/2" href={buyLink} target="_blank" rel="noreferrer noopener" data-sanity={attr('buyLink')}>
        {buyText || 'Buy'}
      </Button>
    </li>
  );
}