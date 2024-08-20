import classNames from "classnames";
import Link from "next/link";


type Props = {
  className?: string,
  children: string | null,
  href?: string | null,
  id?: string
}
export default function Button({className, children, href}: Props) {
  const classes = 'bg-orange text-white py-4 px-12 uppercase font-bold';
  if (href) {
    return (
      <Link href="/" className={classNames(className, classes)}>
        {children}
      </Link>
    )
  }
  return <span className={classNames(className, classes)}>{children}</span>
}