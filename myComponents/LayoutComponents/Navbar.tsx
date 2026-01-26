"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { usePathname } from "next/navigation";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
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
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 w-full",
          scrolled ? "bg-kn-black py-4" : "bg-transparent py-8",
        )}
      >
        <div className=" container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div>
            <Link href="/" className="relative z-[60]">
              <Image
                className={cn(
                  "h-12 w-auto object-contain transition-all duration-300",
                  scrolled ? "invert" : "",
                )}
                src={"/KnLogo-removebg.png"}
                width={62}
                height={62}
                alt="Kn Logo"
              ></Image>
            </Link>
          </div>
          <div className="flex gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      className={cn(
                        "text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:opacity-70",
                        scrolled ? "text-kn-white" : "text-kn-black",
                      )}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
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
