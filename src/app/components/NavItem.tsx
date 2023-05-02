import Link from "next/link"
interface NavItemProps {
  title: string
  href: string
  onClickNavItem: () => void
}

export default function NavItem({ title, href, onClickNavItem }: NavItemProps) {
  return (
    <li className="text-base text-primary group relative">
      <Link href={href} onClick={onClickNavItem}>
        {title}
      </Link>
      <div className="absolute w-0 group-hover:w-full h-1 bg-primary rounded transition-all"></div>
    </li>
  )
}
