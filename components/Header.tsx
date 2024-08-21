import { client } from "@/sanity/lib/client";
import { HEADER_QUERY, MAIN_NAV_QUERY } from "@/sanity/lib/queries";
import { HEADER_QUERYResult, MAIN_NAV_QUERYResult } from "@/sanity.types";
import Link from "next/link";
import Content from "./Content";
import Nav from "./Nav";
import Image from "next/image";
import logo from '@/public/rbr-logo.png';

export default async function header() {
  const data = await client.fetch<HEADER_QUERYResult>(HEADER_QUERY);
  const mainNav = await client.fetch<MAIN_NAV_QUERYResult>(MAIN_NAV_QUERY);
  return (
    <header className="flex items-center justify-between relative z-10 px-[2rem] h-[140px] md:pl-8 md:py-0 md:pr-0 bg-blue">
      <Link href="/" className=" md:mr-[5rem] z-10 block">
        <Image className="" width={140} height={140} src={logo} alt="Reed Brick Roads Music & Arts Festival" />
      </Link>
      <Content className="hidden md:block text-purple2 leading-none text-3xl mx-[2rem] w-[400px] md:flex-intial">
        {data?.headerText}
      </Content>

      <Nav mainMenu={mainNav} />
    </header>
  );
}