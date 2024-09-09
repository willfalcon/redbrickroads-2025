import { client } from "@/sanity/lib/client";
import { CONNECT_QUERY } from "@/sanity/lib/queries";
import NavItem from "./NavItem";
import { ItemProps } from "./Nav";
import { AiFillTwitterSquare, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import BGPattern from "./BGPattern";
import { createDataAttribute } from "next-sanity";

export default async function Connect() {
  const {contact, connect} = await client.fetch(CONNECT_QUERY);
  const {heading, text, slug, menu} = connect;
  const { facebook, instagram, twitter } = contact.social;

  const attrs = createDataAttribute({
    id: 'connect',
    type: 'connect'
  });
  
  const socialAttrs = createDataAttribute({
    id: 'siteSettings',
    type: 'siteSettings',
    path: 'contact.social',
  });

  return (
    <section id="connect" className="md:flex">
      <div className="basis-1/2 flex-grow-0 flex-shrink-0 py-12 px-8 md:px-24">
        {heading && (
          <h2 className="text-orange uppercase text-[5rem]" data-sanity={attrs('heading')}>
            {heading}
          </h2>
        )}
        {text && (
          <p className="uppercase text-[1.8rem] mt-2 mb-7" data-sanity={attrs('text')}>
            {text}
          </p>
        )}
        {menu.length > 0 && (
          <nav className="flex flex-col" data-sanity={attrs('menu')}>
            {menu.map((item: ItemProps & { link: { slug: { current: string } } }, index: number) => (
              <NavItem className="font-bold leading-[2] block !text-black !text-[1.6rem] normal-case" key={item._key} {...item} data-sanity={attrs(`menu[${index}]`)} />
            ))}
          </nav>
        )}
      </div>
      <div className="basis-1/2 flex-grow-0 flex-shrink-0 md:flex md:justify-center md:items-center relative bg-decoOrange">
        <BGPattern />
        <ul className="h-[200px] flex items-center justify-center w-full top-0 relative z-10">
          {facebook && (
            <li className="basis-[100px] flex-shrink" data-sanity={socialAttrs('facebook')}>
              <a className="mx-4 block w-full h-full">
                <AiOutlineFacebook className="w-full h-full max-w-full max-h-full text-black" />
              </a>
            </li>
          )}
          {instagram && (
            <li className="basis-[100px] flex-shrink" data-sanity={socialAttrs('instagram')}>
              <a className="mx-4 block w-full h-full">
                <AiOutlineInstagram className="w-full h-full max-w-full max-h-full text-black" />
              </a>
            </li>
          )}
          {twitter && (
            <li className="basis-[100px] flex-shrink" data-sanity={socialAttrs('twitter')}>
              <a className="mx-4 block w-full h-full">
                <AiFillTwitterSquare className="w-full h-full max-w-full max-h-full text-black" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}