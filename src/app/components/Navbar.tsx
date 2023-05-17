"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TextAlignRight, X } from "phosphor-react";
import NavITem from "./NavItem";

import logo from "../../../public/assets/logo.png";

const navItems = [
  {
    title: "Início",
    href: "/#header",
  },
  {
    title: "Sobre",
    href: "#about",
  },
  {
    title: "Oradores",
    href: "#speakers",
  },
  {
    title: "Organizador",
    href: "#organizers",
  },
  {
    title: "Parceiros",
    href: "#partners",
  },
];

const NavBar = () => {
  const [ scrollY, setScrollY ] = useState(0)
  const [ navbar, setNavbar ] = useState(false);

  useEffect(() => {
    document.querySelector('body')?.classList.remove('overflow-y-hidden')
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [])

  function handleClickNavItem() {
    setNavbar(!navbar);
  }

  return (
    <nav
      className={`w-full px-5 transition-colors duration-700 fixed z-10 right-0 left-0 top-0 text-white ${ scrollY > 200 || navbar ? "bg-primary" : "bg-transparent" }`}
    >
      <div className="max-w-6xl justify-between items-center mx-auto lg:items-center lg:flex">
        <div className="flex items-center justify-between py-3 lg:block">
          <Link href="/">
            <Image
              src={logo}
              width={150}
              alt="Wansati Hackathon"
            />
          </Link>

          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              { navbar ? (
                <X size={24} className="text-white" />
              ) : (
                <TextAlignRight
                  size={24}
                  className={"text-white"}
                />
              ) }
            </button>
          </div>
        </div>

        <div
          className={` mt-20 lg:block lg:pb-0 lg:mt-0 ${
            navbar ? "p-12 lg:p-0 block" : "hidden"
          }`}
        >
          <ul className="h-screen gap-12 lg:h-auto items-center justify-center flex max-lg:flex-col max-lg:-mt-52">
            { navItems.map((navItem) => {
              return (
                <NavITem
                  key={navItem.href}
                  title={navItem.title}
                  href={navItem.href}
                  onClickNavItem={handleClickNavItem}
                  scrollY={scrollY}
                />
              );
            }) }

            <Link
              target="_blank"
              href="https://bzi34dca96i.typeform.com/to/NUZ0udJj"
              className={`font-bold uppercase text-sm px-6 py-3 rounded-full transition-all duration-700 text-white bg-secondary hover:brightness-75 `}
            >
              REGISTAR-SE
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
