import Link from "next/link"
interface NavItemProps {
  title: string
  href: string
  onClickNavItem: () => void
}

export default function NavItem({ title, href, onClickNavItem }: NavItemProps) {
  return (
    <li
      className={`text-base hover:font-bold hover:border-b hover:border-primary`}
    >
      <Link href={href} onClick={onClickNavItem}>
        {title}
      </Link>
    </li>
  )
}
