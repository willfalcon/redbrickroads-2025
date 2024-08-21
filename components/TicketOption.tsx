import { TicketOption as OptionType } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Content from "./Content";
import Button from "./Button";

export default function TicketOption({buyLink,
            buyText,
            price,
            title,
            image, description}: OptionType) {
  return (
    <li className="bg-blue pt-8 px-8 mb-24 h-full md:mx-8 md:mb-40">
      {image && (
        <Image className="w-[250px] mx-auto mt-[-75px]" src={urlFor(image).width(250).height(250).url()} width={250} height={250} alt={image?.alt || buyText || ''} style={{ clipPath: `url(#clipPath)` }} />
      )}
      <h3 className="font-heading uppercase">{title}</h3>
      {price && <span className="font-bold font-heading">{price}</span>}
      <Content className="mb-4 font-headingRegular">{description}</Content>
      <Button className="inline-block translate-y-1/2" href={buyLink} target="_blank" rel="noreferrer noopener">
        {buyText || 'Buy'}
      </Button>
    </li>
  );
}