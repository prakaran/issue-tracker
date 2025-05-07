import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/images/logo.svg";

const NavBar = () => {
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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
