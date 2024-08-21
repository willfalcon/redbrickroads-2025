'use client';

import classNames from "classnames";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { TypedObject } from "sanity";
import SpecialBlock from "./SpecialBlock";
import './Content.css';
import Link from "next/link";

const components = {
  types: {
    specialBlock: ({ value }) => {
      return <SpecialBlock block={value} />;
    },
  },
  marks: {
    link: (props) => {
      const { children, value } = props;
      const { url, externalUrl, slug } = value;
      if (externalUrl) {
        return (
          <a className="text-link underline" href={externalUrl} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      if (url) {
        return <Link className="text-link underline" href={`/${slug}`}>{children}</Link>
      }
      return <span>{children}</span>;
    },
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-8">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-8">{children}</ol>
  },
  listItem: {
    bullet: ({children}) => <li className="my-2">{children}</li>,
    number: ({children}) => <li className="my-2">{children}</li>
  }
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