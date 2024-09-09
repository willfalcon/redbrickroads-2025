import classNames from "classnames";
import { PortableText, PortableTextMarkComponentProps, PortableTextReactComponents } from "next-sanity";
import { File, TypedObject } from "sanity";
import SpecialBlock from "./SpecialBlock";
import './content-styles.css';
import Link from "next/link";
import Reference from "./Reference";
import { Link as LinkType, SpecialBlock as SpecialBlockType } from "@/sanity.types";
import { PropsWithChildren } from "react";

const components: Partial<PortableTextReactComponents> = {
  types: {
    specialBlock: ({ value }: { value: SpecialBlockType }) => {
      return <SpecialBlock block={value} />;
    },
    reference: ({ value }: { value: { _ref: string } }) => {
      // console.log(value)

      return <Reference {...value} />;
    },
  },
  marks: {
    link: (props: PortableTextMarkComponentProps<any>) => {
      const { children, value } = props;
      const { url, externalUrl, slug } = value;
      if (externalUrl) {
        return (
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      if (url) {
        return (
          <Link href={`/${slug}`}>
            {children}
          </Link>
        );
      }
      return <span>{children}</span>;
    },
    file: (props: PortableTextMarkComponentProps<any>) => {
      const { value, children } = props;
      return <Reference {...value.asset} children={children} />;
    },
  },
  list: {
    bullet: ({ children }: PropsWithChildren) => <ul>{children}</ul>,
    number: ({ children }: PropsWithChildren) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: PropsWithChildren) => <li>{children}</li>,
    number: ({ children }: PropsWithChildren) => <li>{children}</li>,
  },
};

type props = {
  className?: string;
  children: TypedObject | TypedObject[] | null | undefined;
  'data-sanity'?: string
};

export default async function Content({ children, className, ['data-sanity']: dataSanity }: props) {
 
  return (
    <div className={(classNames('block-content', className))} data-sanity={dataSanity || ''}>
      {children && (
        <PortableText value={children} components={components} />
      )}
    </div>
  );
}