'use client';

import type { Schedule } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Event from "./Event";

export default function Schedule({ backgroundImage, heading, scheduleItems }: Schedule) {
  
  return (
    <div className="schedule p-4 relative flex flex-col justify-center mb-24 md:py-20 md:first:h-[calc(100vh-180px)] md:h-[calc(100vh-40px)]">
      <div className="bg-image-wrapper absolute w-full h-full top-0 left-0 overflow-hidden z-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-red after:opacity-20">
        {backgroundImage && <Image className="object-cover" src={urlFor(backgroundImage).url()} alt={backgroundImage.alt || ''} fill />}
      </div>
      {heading && (
        <h2 className="schedule-heading relative z-10 text-orange text-[3rem] uppercase w-content max-w-full mx-auto">{heading}</h2>
      )}
      <ul className="schedule-list relative z-10 bg-blue p-4 my-6 w-content max-w-full mx-auto">
        {scheduleItems?.map(event => <Event key={event._key} {...event} />)}
      </ul>
    </div>
  );
}