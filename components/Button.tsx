import classNames from "classnames";
import Link from "next/link";


type Props = {
  className?: string,
  children: string | null,
  href?: string | null,
  id?: string,
  target?: string,
  rel?: string,
  type?: string
}
export default function Button(props: Props) {

  const {className, children, href, target, rel, type} = props;

  if (type == 'submit') {
    console.log(type)
  }

  const classes = 'bg-orange !text-white !no-underline py-4 px-12 uppercase font-bold';
 
  if (type === 'submit') {
    <button type="submit" className={classNames(className, classes)}>{children}</button>
  }
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