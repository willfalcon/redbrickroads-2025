import { Artist as ArtistType, ARTISTS_QUERYResult } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { ARTISTS_QUERY } from "@/sanity/lib/queries";
import Artist from "./Artist";

export default async function Artists() {
  const artists = await client.fetch<[ArtistType]>(ARTISTS_QUERY);

  if (!artists) return;

  return (
    <section className="artists p-4">
      <h2 className="text-right w-[300px] max-w-full mx-auto my-12 md:w-[950px] text-orange uppercase text-[3rem] md:text-[6rem]">Listen Now</h2>
      <ul className="flex flex-wrap w-[950px] max-w-full mx-auto justify-evenly md:grid md:justify-between grid-cols-3 auto-rows-[300px] gap-y-20">
        {artists?.map(artist => (
          <Artist key={artist._id} {...artist} />
        ))}
      </ul>
    </section>
  );

}