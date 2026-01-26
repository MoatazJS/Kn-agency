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
          <div className="hidden lg:flex gap-8">
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
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {/* Burger */}
            <span
              className={cn(
                "w-7 h-0.5 transition-all duration-300 ease-in-out",
                menuOpen
                  ? "rotate-45 translate-y-2 bg-kn-white"
                  : scrolled
                    ? "bg-kn-white"
                    : "bg-kn-black",
              )}
            />
            <span
              className={cn(
                "w-7 h-0.5 transition-all duration-300 ease-in-out",
                menuOpen
                  ? "opacity-0"
                  : scrolled
                    ? "bg-kn-white"
                    : "bg-kn-black",
              )}
            />
            <span
              className={cn(
                "w-7 h-0.5 transition-all duration-300 ease-in-out",
                menuOpen
                  ? "-rotate-45 -translate-y-2 bg-kn-white"
                  : scrolled
                    ? "bg-kn-white"
                    : "bg-kn-black",
              )}
            />
          </button>
        </div>
      </nav>
      {/* Links Modal  */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          onClick={closeMenu}
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-kn-black via-kn-gray-dark to-kn-gray-light transition-opacity duration-500",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />
        {/* menu content  */}
        <div
          className={cn(
            "relative h-full flex flex-col items-center justify-center transition-all duration-500 delay-100",
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <nav className="flex flex-col items-center gap-8 md:gap-10">
            {navLinks.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "group relative text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider transition-all duration-300",
                  "text-kn-white hover:text-kn-gray",
                  pathname === item.href && "text-kn-gray",
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0",
                )}
                style={{
                  transitionDelay: menuOpen ? `${index * 100 + 200}ms` : "0ms",
                }}
              >
                {/* Animated underline */}
                <span className="relative">
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-1 bg-kn-gray transition-all duration-300",
                      "group-hover:w-full",
                      pathname === item.href ? "w-full" : "w-0",
                    )}
                  />
                </span>

                {/* Glow effect on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-kn-white" />
              </Link>
            ))}
          </nav>
          <div
            className={cn(
              "absolute bottom-12 text-kn-gray text-sm uppercase tracking-widest transition-all duration-500",
              menuOpen
                ? "translate-y-0 opacity-100 delay-500"
                : "translate-y-4 opacity-0",
            )}
          >
            Kn Agency
          </div>
        </div>
      </div>
    </>
  );
}
