import { PortableText, PortableTextMarkComponentProps } from "next-sanity";
import { PropsWithChildren } from "react";
import { TypedObject } from "sanity";

import './content-styles.css';
import classNames from "classnames";
import Link from "next/link";

const components = {
  marks: {
    link: (props: PortableTextMarkComponentProps<any>) => {
      const { children, value } = props;
      const { url, externalUrl } = value;
      if (externalUrl) {
        return (
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      if (url?.slug?.current) {
        return <Link href={`/${url.slug.current}`}>{children}</Link>;
      }
      return <span>{children}</span>;
    },
  },
};

type props = {
  className?: string;
  children: TypedObject | TypedObject[] | null | undefined;
};

export default function SimpleContent({className, children}: props) {
  // console.log(children)
  return (
    <div className={classNames('block-content', className)}>
      {children && (
        <PortableText value={children} components={components} />
      )}
    </div>
  );
}