import Link from "next/link";
interface NavItemProps {
  title: string;
  href: string;
  scrollY: number;
  onClickNavItem: () => void;
}

const NavItem = ({ title, href, onClickNavItem, scrollY }: NavItemProps) => {
  return (
    <li className={`text-lg md:text-base relative text-ehite group text-white`}>
      <a href={ href } onClick={ onClickNavItem }>
        { title }
      </a>
      <div className={`absolute w-0 group-hover:w-full h-1 rounded transition-all bg-white`}></div>
    </li>
  )
}

export default NavItem;
