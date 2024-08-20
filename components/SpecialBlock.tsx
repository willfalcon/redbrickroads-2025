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
  

  const blockWrapperRef: MutableRefObject<HTMLElement | null> = useRef(null);

  const viewport = useWindowSize();

  const isWideScreen = viewport.width && viewport.width > 768;
  
  const imageColumnWidth = viewport.width && isWideScreen ? roundToNearest(viewport.width * 0.5, 100)  : viewport.width || 0;
  const imageWidth = imageColumnWidth >= 500 ? 500 : imageColumnWidth;
  const imageHeight = viewport.height && isWideScreen ? roundToNearest(viewport.height * 0.8, 50) : viewport.height || 0;
  
  return (
    <section className="content-block h-screen flex py-[10vh]" ref={blockWrapperRef}>
      <div 
        className={classNames(`overflow-hidden relative flex-shrink-0`, {
          'order-2': block.reverse
        })} 
        style={{
          flexBasis: `${imageWidth}px`
        }}
      >
        {block.image && (
          <Image
            className="content-block__image object-cover"
            src={urlFor(block.image).height(imageHeight).width(imageWidth).url()}
            width={imageWidth}
            height={imageHeight}
            alt={block.image.alt || ''}
          />
        )}
      </div>
      <div className={classNames(`content-wrapper py-[5rem] px-4 flex-1 relative`, {
        'order-1': block.reverse, 
        'ml-4': !block.reverse, 
        'mr-4': block.reverse
      })}>
        {block.backgroundPattern && (
          <BGPattern reverse={block.reverse || false} />
        )}
        <div className="content-block__content flex flex-col justify-center h-full w-[65%] max-w-full mx-auto items-start relative z-10">
          <h2 className="content-block__heading text-orange text-[6rem] uppercase">{block.heading}</h2>
          {block.copy && <p className="content-block__body mb-16" dangerouslySetInnerHTML={{ __html: block.copy }} />}
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