import { client } from "@/sanity/lib/client"
import { FOOTER_NAV_QUERY, FOOTER_QUERY } from "@/sanity/lib/queries"
import NavItem from "./NavItem";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ItemProps } from './Nav';
import { FOOTER_QUERYResult, FooterLogo } from "@/sanity.types";
import { createDataAttribute } from "next-sanity";

export default async function Footer() {
  const { footerLogos, sponsor} = await client.fetch<NonNullable<FOOTER_QUERYResult>>(FOOTER_QUERY);
  const footerNav = await client.fetch(FOOTER_NAV_QUERY);

  const attrs = createDataAttribute({
    id: 'footerSettings',
    type: 'footerSettings',
  });

  return (
    <footer className="p-4 md:flex md:justify-between md:items-center">
      {footerNav && (
        <nav className="p-8" data-sanity={attrs('footerNav')}>
          <ul className="md:flex">
            {footerNav.map((item: ItemProps, index: number) => (
              <NavItem
                className="!font-extrabold !uppercase text-[2rem] !text-black mx-0 mb-4"
                subMenuClasses="!text-black block normal-case !text-[1.6rem] leading-loose"
                key={item._key}
                {...item}
                data-sanity={attrs(`footerNav[${index}]`)}
              />
            ))}
          </ul>
        </nav>
      )}
      {footerLogos && (
        <ul className="flex justify-center items-center flex-grow">
          {footerLogos?.map((logo: FooterLogo & { _key: string }, index: number) => (
            <li key={logo._key} className="basis-[100px] w-[100px] mx-4 h-[100px]" data-sanity={attrs(`footerLogos[${index}]`)}>
              {logo.logo &&
                (logo.link ? (
                  <a className="block h-full w-full relative" href={logo.link} target="_blank" aria-label={logo.label}>
                    {logo.logo && <Image src={urlFor(logo.logo).width(250).url()} alt={logo.logo.alt || logo.label || ''} fill />}
                  </a>
                ) : (
                  <span className="block h-full w-full relative">
                    <Image src={urlFor(logo.logo).width(250).url()} alt={logo.logo.alt || logo.label || ''} fill />
                  </span>
                ))}
            </li>
          ))}
        </ul>
      )}
      {sponsor?.logo?.asset && (
        <div>
          {sponsor.link ? (
            <a className="footer__sponsor-link" href={sponsor.link} target="_blank" rel="noopener noreferrer">
              {sponsor.heading && <span>{sponsor.heading}</span>}
              {sponsor.logo && (
                <Image
                  src={urlFor(sponsor.logo).width(250).url()}
                  width={250}
                  height={250}
                  alt={sponsor.logo.alt || sponsor.heading || ''}
                />
              )}
            </a>
          ) : (
            <span>
              {sponsor.heading && <span>{sponsor.heading}</span>}
              {sponsor.logo && (
                <Image
                  src={urlFor(sponsor.logo).width(250).url()}
                  width={250}
                  height={250}
                  alt={sponsor.logo.alt || sponsor.heading || ''}
                />
              )}
            </span>
          )}
        </div>
      )}
    </footer>
  );
}