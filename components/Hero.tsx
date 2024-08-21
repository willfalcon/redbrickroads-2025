
import Image from "next/image";
import Button from "./Button";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import classNames from "classnames";

type HeroType = {
  hasSubNav?: boolean
  heroButton?: {
    label?: string
    url?: string
  }
  heroText?: string
  heroSubText?: string
  heroImage: {        
    hotspot: {
      y: number
      height: number
      _type: string
      width: number
      x: number
    }
    crop: {
      top: number
      left: number
      bottom: number
      right: number
      _type: string
    }
    asset: {
      metadata: {
        lqip: string
      }
    }
    _id: string
    alt: string
  }
};

export default function Hero(props: HeroType) {
  if (!props) {
    return null;
  }

  console.log(props)

  const { hasSubNav = false, heroButton, heroText, heroSubText, heroImage } = props;
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const classes = classNames('w-full h-[400px] overflow-hidden relative',{
    'md:h-[calc(100vh-140px)]': !hasSubNav,
    'md:h-[calc(100vh-140px-63px)]': hasSubNav
  });
  return (
    <div id="hero" className={classes}>
      {heroImage?.asset && (
        <div id="hero-image-wrapper" className="overflow-hidden w-full h-full absolute md:relative">
          <Image
            id="hero-image"
            src={urlFor(heroImage).url()}
            alt={heroImage?.alt || ''}
            fill
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL={heroImage.asset.metadata?.lqip || ''}
          />
        </div>
      )}
      {(heroText || heroSubText || heroButton) && (
        <div
          id="hero-content"
          className="flex flex-col justify-end items-center relative w-full h-full top-0 left-0 p-16 text-center md:absolute"
        >
          {heroText && (
            <h2 id="hero-heading" className="text-[3.6rem] md:text-[4.8rem] text-blue uppercase w-[800px] max-w-full">
              {heroText}
            </h2>
          )}
          {heroSubText && (
            <span id="hero-sub-heading" className="">
              {heroSubText}
            </span>
          )}
          {heroButton && (
            <Button id="hero-button" className="mt-[2rem]" href={heroButton.url}>
              {heroButton.label || ''}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}