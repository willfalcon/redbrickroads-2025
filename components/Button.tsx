import classNames from "classnames";
import Link from "next/link";


type Props = {
  className?: string,
  children: string | null,
  href?: string | null,
  id?: string,
  target?: string,
  rel?: string
}
export default function Button({className, children, href, target, rel}: Props) {
  const classes = 'bg-orange text-white py-4 px-12 uppercase font-bold';
  if (target == "_blank" && href) {
    return <a className={classNames(className, classes)} href={href} target={target} rel={rel || ''}>{children}</a>
  }
  if (href) {
    return (
      <Link href={href} className={classNames(className, classes)}>
        {children}
      </Link>
    )
  }
  return <span className={classNames(className, classes)}>{children}</span>
}