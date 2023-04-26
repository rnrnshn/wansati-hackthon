"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/assets/logo.png";
import logoWhite from "../../../public/assets/logoWhite.png";
import { TextAlignRight, X } from "phosphor-react";
import NavITem from "./NavItem";

const navItems = [
  {
    title: "Início",
    href: "/",
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

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  function handleClickNavItem() {
    setNavbar(!navbar);
  }

  return (
    <nav
      className={`w-full max-md:px-10 transition-colors duration-700 fixed z-10 right-0 left-0 top-0 ${
        scrollY > 200 || navbar
          ? "bg-primary text-white "
          : "text-primary bg-green-light"
      }`}
    >
      <div className="container justify-between items-center  mx-auto md:items-center md:flex ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              src={scrollY > 200 || navbar ? logoWhite : logo}
              width={130}
              alt="Wansati Hackathon"
            />
          </Link>

          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <X size={24} className="text-white" />
              ) : (
                <TextAlignRight
                  size={24}
                  className={scrollY > 200 ? "text-white" : "text-primary"}
                />
              )}
            </button>
          </div>
        </div>

        <div
          className={` mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "p-12 md:p-0 block" : "hidden"
          }`}
        >
          <ul className="h-screen gap-12 md:h-auto items-center justify-center flex max-md:flex-col max-md:-mt-52 ">
            {navItems.map((navItem) => {
              return (
                <NavITem
                  key={navItem.href}
                  title={navItem.title}
                  href={navItem.href}
                  onClickNavItem={handleClickNavItem}
                />
              );
            })}

            <button
              className={`font-bold uppercase text-sm border border-primary px-6 py-2 ml-28 rounded-full hover:bg-primary hover:text-white transition-colors duration-700 ${
                scrollY > 200
                  ? "border border-white ml-0 text-white hover:bg-white hover:text-primary"
                  : "text-primary bg-green-light ml-0"
              }`}
            >
              REGISTAR-SE
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
