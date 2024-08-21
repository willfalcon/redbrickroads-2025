'use client';

import { Faq } from "@/sanity.types";
import Content from "./Content";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import classNames from "classnames";

export default function FAQ({question, answer, slug, _id}: Faq) {
  console.log(answer)
  const [isExpanded, setIsExpanded] = useState(false);

  const [height, setHeight] = useState(0);
  const ref: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  return (
    <div className="w-content max-w-full mx-auto mb-8" id={slug?.current}>
      <h3 className="mb-8">
        <button className="text-left inline font-medium text-[2rem] pb-2 aria-expanded:text-red transition-all" aria-expanded={isExpanded} aria-controls={_id} id={`${_id}-label`} onClick={() => setIsExpanded(!isExpanded)}>
          {question}
        </button>
      </h3>
      <section className={classNames('group transition-all overflow-hidden')} style={{
        height: isExpanded ? `${height}px` : '0px'
      }} id={_id} aria-labelledby={`${_id}-label`} ref={ref}>
        <Content>{answer}</Content>
          <span className={classNames('h-[4px] max-w-full mx-auto bg-black opacity-25 block mb-8 transition-all origin-left scale-x-0', {
            'scale-x-100': isExpanded
          })}></span>
      </section>
    </div>
  )
}