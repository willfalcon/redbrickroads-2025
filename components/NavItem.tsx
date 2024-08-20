import classNames from "classnames";
import Link from "next/link";

// type ItemProps = {
//   label: string;
//   link: {
//     slug: {
//       current: string
//     }
//   };
//   buttonStyles: boolean;
//   anchor: string;
//   externalUrl: string;
//   subMenu: [ItemProps];  
//   key?: string;
//   _key?: string;
// };

import type { ItemProps } from "./Nav";

export default function NavItem(props: ItemProps & {link: { slug: {current: string} }}) {
  
  const {  label, link, buttonStyles, anchor, externalUrl, subMenu } = props;
  
  let classes = classNames('font-extrabold text-[2rem] uppercase text-red');
  if (buttonStyles) {
    classes += ' bg-orange text-white py-3 px-12';
  }
  if (link && anchor) {
    return <Link className={classes} href={`/${link.slug.current}#${anchor}`}>{label}</Link>;
  }
  if (link) {
    return (
      <Link className={classes} href={`/${link.slug.current}`}>
        {label}
      </Link>
    );
  }
  if (anchor) {
    return (
      <Link className={classes} href={`#${anchor}`}>
        {label}
      </Link>
    );
  }
  if (externalUrl) {
    return (
      <a className={classes} href={`#${anchor}`} target="_blank" rel="nofollow">
        {label}
      </a>
    );
  }
  if (subMenu) {
    return (
      <span>
        {label}
        <ul className="sub-menu">
          {subMenu.map((item: ItemProps) => (
            <NavItem key={item._key} {...item} />
          ))}
        </ul>
      </span>
    );
  }
  return (
    <span>
      {label}
    </span>
  );
}