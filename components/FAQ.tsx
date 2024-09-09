'use client';

import { Faq } from "@/sanity.types";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import SimpleContent from "./SimpleContent"
import { createDataAttribute } from "next-sanity";
import { BiExpandVertical } from 'react-icons/bi';



export default function FAQ({question, answer, slug, _id, draftMode}: Faq & {draftMode: boolean}) {

  const [isExpanded, setIsExpanded] = useState(false);

  const [height, setHeight] = useState(0);
  const ref: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  const attr = createDataAttribute({
    id: _id,
    type: 'faq',
  });

  return (
    <div className="w-content max-w-full mx-auto mb-8" id={slug?.current}>
      {draftMode && (
        <button className="mb-2 italic flex items-center hover:underline cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>Expand <BiExpandVertical /></button>
      )}
      <h3 className="mb-8" data-sanity={attr('question')}>
        <button className="text-left inline font-medium text-[2rem] pb-2 aria-expanded:text-red transition-all" aria-expanded={isExpanded} aria-controls={_id} id={`${_id}-label`} onClick={() => setIsExpanded(!isExpanded)}>
          {question}
        </button>
      </h3>
      <section className={classNames('group transition-all overflow-hidden')} style={{
        height: isExpanded ? `${height}px` : '0px'
      }} id={_id} aria-labelledby={`${_id}-label`} ref={ref} data-sanity={attr('answer')}>
        <SimpleContent>{answer}</SimpleContent>
        <span className={classNames('h-[4px] max-w-full mx-auto bg-black opacity-25 block mb-8 transition-all origin-left scale-x-0', {
          'scale-x-100': isExpanded
        })}></span>
    </section>
    </div>
  )
}