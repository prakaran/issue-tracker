"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/images/logo.svg";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./components/ThemeSwitch";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center ">
      <Link href="/">
        <Image
          src={Logo}
          alt="Issue Tracker Logo"
          height={40}
          className="dark:invert"
        />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={classNames({
              "text-zinc-500 dark:text-zinc-100": currentPath !== link.href,
              "text-zinc-900 dark:text-zinc-100": currentPath === link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
