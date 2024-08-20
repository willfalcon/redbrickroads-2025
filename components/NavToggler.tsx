import classNames from "classnames";


type Props = {
  navOpen: boolean;
  toggleNav: React.MouseEventHandler<HTMLButtonElement>;
};

export default function NavToggler({ navOpen, toggleNav }: Props) {
  const base = 'block absolute bg-red top-1/2 h-[3px] w-3/4 left-1/2 transition-all -translate-x-1/2';
  const span1 = navOpen ? ' translate-y-[25px] rotate-45' : 'translate-y-[15px]';
  const span2 = navOpen ? ' translate-y-[25px] opacity-0' : 'translate-y-[25px] opacity-100';
  const span3 = navOpen ? ' translate-y-[25px] -rotate-45' : 'translate-y-[35px]';

  return (
    <button className="block w-20 h-20 border-none relative outline-none md:hidden" onClick={toggleNav}>
      <span className={classNames(base, span1)} />
      <span className={classNames(base, span2)} />
      <span className={classNames(base, span3)} />
    </button>
  );
}