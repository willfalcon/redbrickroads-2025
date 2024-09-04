import { PropsWithChildren } from "react";
import type { File } from "sanity";

export default function File({children, url}: PropsWithChildren & {url: string}) {

  return (
    <a className="text-link underline" href={url} target="_blank">{children}</a>
  )
}