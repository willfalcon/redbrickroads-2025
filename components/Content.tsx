'use client';

import classNames from "classnames";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";
import SpecialBlock from "./SpecialBlock";
import { SpecialBlock as SpecialBlockType} from "@/sanity.types";

type SpecialBlockTypes = {
  value: SpecialBlockType
}
const components = {
  types: {
    specialBlock: ({ value }: SpecialBlockTypes) => {
      return <SpecialBlock block={value} />;
    },
  },
};

type props = {
  className?: string;
  children: TypedObject | TypedObject[] | null | undefined
};

export default function Content({children, className}: props) {
  
  return (
    <div className={(classNames('block-content', className))}>
      {children && (
        <PortableText value={children} components={components} />
      )}
    </div>
  );
}