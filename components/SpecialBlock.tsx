'use client';

import type { SpecialBlock } from "@/sanity.types";
import { MutableRefObject, useRef } from "react";
import Image from "next/image";
import { roundToNearest, urlFor } from "@/sanity/lib/image";
import { useWindowSize } from "@uidotdev/usehooks";
import Button from "./Button";
import BGPattern from "./BGPattern";
import classNames from "classnames";

type Props = {
  block: SpecialBlock
}
export default function SpecialBlock({block}: Props) {

  if (block.heading === 'Craft Market') {
    console.log(block)
  }
  const viewport = useWindowSize();

  const isWideScreen = viewport.width && viewport.width > 768;
  
  const imageColumnWidth = viewport.width && isWideScreen ? roundToNearest(viewport.width * 0.5, 100)  : viewport.width || 0;
  const imageWidth = imageColumnWidth >= 500 ? 500 : imageColumnWidth;
  const imageHeight = viewport.height && isWideScreen ? roundToNearest(viewport.height * 0.8, 50) : viewport.height || 0;
  const imgSrc = block.image ? isWideScreen ? urlFor(block.image).height(imageHeight).width(imageWidth).url() : urlFor(block.image).width(roundToNearest(viewport.width!, 100)).url() : null;

  return (
    <section className="content-block mt-20 relative md:flex first:mt-0 !w-full" id={block.slug?.current}>
      <div
        className={classNames(`overflow-hidden relative flex-shrink`, {
          'order-2': block.reverse,
        })}
        style={{
          flexBasis: `${imageWidth}px`,
        }}
      >
        {block.image && imgSrc && (
          <Image
            className="content-block__image object-cover"
            src={imgSrc}
            width={imageWidth}
            height={imageHeight}
            alt={block.image.alt || ''}
          />
        )}
      </div>
      <div
        className={classNames(`content-wrapper py-20 px-4 mx-auto md:flex-1 md:w-[300px] relative`, {
          'order-1': block.reverse,
          'md:ml-4': !block.reverse,
          'md:mr-4': block.reverse,
          'md:text-right': block.reverse,
        })}
      >
        {block.backgroundPattern && <BGPattern reverse={block.reverse} />}
        <div
          className={classNames(
            'content-block__content md:flex flex-col justify-center md:h-full md:w-[65%] max-w-full mx-auto relative z-10',
            {
              'items-start': !block.reverse,
              'items-end': block.reverse,
            }
          )}
        >
          <h2
            className={classNames('content-block__heading text-orange text-[3rem] md:text-[6rem] uppercase', {
              'text-orange': !block.reverse,
              'text-red': block.reverse,
            })}
          >
            {block.heading}
          </h2>
          {block.copy && <p className="content-block__body !mb-16" dangerouslySetInnerHTML={{ __html: block.copy }} />}
          {block.link && (
            <Button className="content-block__link" href={block.link.url}>
              {block.link.label || ''}
            </Button>
          )}
        </div>
      </div>
    </section>
  );

}