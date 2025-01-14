"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "@/public/assets/images/logo1.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = ({ active }: { active: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/blogs", label: "Articles" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`bg-transparent text-black p-6 px-8 w-full flex justify-between items-center`}
    >
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="font-semibold text-lg">Viewus</span>
        </div>
      </Link>
      <div className="md:flex items-center justify-center gap-6 hidden">
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                className={cn(
                  "relative pb-6 duration-100 hover:text-text2 group",
                  active === "pricing" ? "text-text2" : ""
                )}
                href="/blogs"
              >
                Articles
                <span
                  className={cn(
                    "absolute bottom-4 left-1/2 h-0.5 w-0 bg-text transition-all duration-200 ease-out group-hover:w-full group-hover:left-0",
                    active === "pricing" ? "w-full left-0" : ""
                  )}
                />
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "relative pb-6 duration-100 hover:text-text2 group",
                  active === "pricing" ? "text-text2" : ""
                )}
                href="/about"
              >
                About
                <span
                  className={cn(
                    "absolute bottom-4 left-1/2 h-0.5 w-0 bg-text transition-all duration-200 ease-out group-hover:w-full group-hover:left-0",
                    active === "pricing" ? "w-full left-0" : ""
                  )}
                />
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/login">
            <Button
              className="group relative rounded-xl px-6 py-5 text-lg font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:translate-y-[-1px] overflow-hidden ring-1 ring-text ring-opacity-60"
              style={{
                background:
                  "linear-gradient(130deg, #a855f7 30%,rgb(188, 130, 247) 60%,rgb(173, 94, 247) 80%,rgb(188, 130, 247) 95%);",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `
              linear-gradient(to bottom,
                rgba(255, 255, 255, 0.5) 0%,
                rgba(255, 255, 255, 0.15) 5%,
                transparent 20%
              ),
              linear-gradient(to top,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.15) 4%,
                transparent 20%
              )
            `,
                  borderRadius: "12px",
                }}
              />
              <span className="z-10 text-md font-semibold">Sign Up</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="md:hidden relative">
        <Button
          variant="ghost"
          size="icon"
          className="relative z-50 transition-all duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    active === item.href.slice(1) && "bg-gray-100 text-gray-900"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
