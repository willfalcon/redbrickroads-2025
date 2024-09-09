import classNames from "classnames";
import Link from "next/link";

import type { ItemProps } from "./Nav";

export default function NavItem(props: ItemProps | any) {
  
  const { label, link, buttonStyles, anchor, externalUrl, subMenu, className, subMenuClasses, ['data-sanity']: dataSanity } = props;
  
  let classes = 'font-extrabold text-[2rem] uppercase text-red cursor-pointer block';
  if (buttonStyles) {
    classes += ' bg-orange text-white py-3 px-12';
  }
  if (link && anchor) {
    return <Link className={classNames(classes, className)} href={`/${link.slug.current}#${anchor}`} data-sanity={dataSanity}>{label}</Link>;
  }
  if (link) {
    return (
      <Link className={classNames(classes, className)} href={`/${link.slug.current}`} data-sanity={dataSanity}>
        {label}
      </Link>
    );
  }
  if (anchor) {
    return (
      <Link className={classNames(classes, className)} href={`#${anchor}`} data-sanity={dataSanity}>
        {label}
      </Link>
    );
  }
  if (externalUrl) {
    return (
      <a className={classNames(classes, className)} href={`#${anchor}`} target="_blank" rel="nofollow" data-sanity={dataSanity}>
        {label}
      </a>
    );
  }
  if (subMenu) {
    return (
      <span className="mx-4" data-sanity={dataSanity}>
        <span className={classNames(classes, className, 'mx-0')}>{label}</span>
        <ul className="sub-menu">
          {subMenu.map((item: ItemProps) => (
            <NavItem className={subMenuClasses} key={item._key} {...item} />
          ))}
        </ul>
      </span>
    );
  }
  return <span className={classNames(classes, className)}>{label}</span>;
}