import { MenuItem } from "@/sanity.types"
import NavItem from "./NavItem"

type Props = {
  nav: [MenuItem]
}
export default function SubNav({nav}: Props | any) {
  
  return (
    <nav className="bg-orange mb-20">
      <ul className="flex justify-around p-8 flex-wrap">
        {nav.map((item: MenuItem & {_key: string}) => (
          <li className="mx-4 block *:text-white" key={item._key}>
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  )

}