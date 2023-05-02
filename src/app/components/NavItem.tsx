import Link from "next/link";
interface NavItemProps {
  title: string;
  href: string;
  scrollY: number;
  onClickNavItem: () => void;
}

const NavItem = ({ title, href, onClickNavItem }: NavItemProps) => {
  return (
    <li className={`text-base group relative text-white ${ scrollY > 200 ? "md:text-white" : "md:text-primary" }`}>
      <Link href={ href } onClick={ onClickNavItem }>
        { title }
      </Link>
      <div className={`absolute w-0 group-hover:w-full h-1 rounded transition-all bg-white ${ scrollY > 200 ? "md:bg-white" : "md:bg-primary" }`}></div>
    </li>
  )
}

export default NavItem;
