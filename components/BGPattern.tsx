'use client';

import { useMeasure } from '@uidotdev/usehooks';

type Props = {
  reverse?: boolean
}
export default function BGPattern({reverse = false}: Props) {
  const [ref, { width, height }] = useMeasure();

  

  const baseStyles = {
    top: 0,
  };

  function rads(deg: number) {
    return deg * Math.PI / 180
  }
  function deg(rads: number) {
    return 180 * rads / Math.PI
  }

  function leftSide(pos: number, reverse: boolean = false) {
    if (!width || !height) return {};

    const baseWidth = width * pos;
    const topPos = width * pos;
    const bottomPos = width * .1;
    const angle = 90 - deg(Math.atan(height / (topPos - bottomPos)));
    const length = height / Math.cos(rads(angle));
    const extraHeight = bottomPos * Math.cos(rads(90 - angle));
    if (reverse) {
      return {
        transform: `rotate(-${angle}deg)`,
        height: `${length + extraHeight}px`,
        width: `${baseWidth}px`,
        right: `0`,
        transformOrigin: 'top left'
      }
    }
    return {
      transform: `rotate(${angle}deg)`,
      height: `${length + extraHeight}px`,
      width: `${baseWidth}px`,
      left: `0`,
      transformOrigin: 'top right'
    }
  }

  function rightSide(pos: number, reverse: boolean = false) {
    if (!width || !height) return {}

    const baseWidth = width * pos;
    const topPos = width * pos;
    const bottomPos = width * .1;
    const angle = 90 - deg(Math.atan(height / (topPos - bottomPos)))
    
    const length = height / Math.cos(rads(angle));
    const extraHeight = bottomPos * Math.cos(rads(90-angle))
    
    if (reverse) {
      return {
        transform:`rotate(${Math.round(angle)}deg)`,
        height: `${length + extraHeight}px`,
        width:`${baseWidth}px`,
        left: 0,
        transformOrigin: 'top right'
      }
    }
    return {
      transform:`rotate(-${Math.round(angle)}deg)`,
      height: `${length + extraHeight}px`,
      width:`${baseWidth}px`,
      right: 0,
      transformOrigin: 'top left'
    }

  }



  return (
    <div className="absolute w-full h-full left-0 top-0 z-0 bg-decoOrange overflow-hidden" ref={ref}>
      {reverse ? (
        <>
          <div
            className="absolute bg-decoPink"
            style={{
              ...baseStyles,
              ...rightSide(.5, true)
            }}
          />
          <div
            className="absolute bg-decoYellow"
            style={{
              ...baseStyles,
              ...leftSide(.35, true)
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute bg-decoYellow"
            style={{
              ...baseStyles,
              ...leftSide(.5)
            }}
          />

          <div
            className="absolute bg-decoPink"
            style={{
              ...baseStyles,
              ...rightSide(.35)
            }}
          />
        </>
      )}
    </div>
  );
}