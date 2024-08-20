'use client';

import type { Artist } from "@/sanity.types";
import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import MS from "./MS";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function Artist({name, local, spotify, image}: Artist) {
  const [hover, setHover] = useState(false);
  const [transform, setTransform] = useState(0);
  return (
    <li className="artist mx-auto relative overflow-hidden group">
      {image && (
        <Image className="group-hover:scale-110 transition ease-in-out duration-500" src={urlFor(image).width(300).height(300).url()} width={300} height={300} alt={image?.alt || name || ''} />
      )}
      <a className="artist__link absolute top-0 left-0 h-[300px] w-[300px] bg-orange/65 text-white pt-20 px-20 py-8 flex flex-wrap items-start" href={spotify} target="_blank" rel="noreferrer">
        <h3 className="artist__name uppercase text-[3.6rem]">{name}</h3>
        {local && (
          <span className="artist__local font-bold text-[2.2rem] uppercase flex self-start leading-tight">
            <MS className="basis-[70px]" />
            Mississippi Artist
          </span>
        )}
        <span className="artist__spotify self-end text-[1.8rem] flex">
          <FaSpotify className="mr-1" />
          Listen on Spotify
        </span>
      </a>
    </li>
  );
}