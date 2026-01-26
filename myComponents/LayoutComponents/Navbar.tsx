"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const navLinks = [
    { href: "work", name: "Work", id: 1 },
    { href: "services", name: "Services", id: 2 },
    { href: "about", name: "About", id: 3 },
    { href: "contact", name: "Contact", id: 4 },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 w-full",
          scrolled ? "bg-kn-black py-4" : "bg-transparent py-8",
        )}
      >
        <div className=" flex mx-32 items-center h-28 justify-between bg-white">
          <div>
            <Image
              src={"/KnLogo-removebg.png"}
              width={62}
              height={62}
              alt="Kn Logo"
            ></Image>
          </div>
          <div>
            <ul className="flex gap-8">
              {navLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
