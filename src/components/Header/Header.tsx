"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import Logo from "@/components/Header/components/Logo";

const links = [
  { label: "Who am I?", href: "#about-me" },
  { label: "My skills", href: "#skills" },
  { label: "My career", href: "#career" },
  { label: "Contact me", href: "#contact-me" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <Logo />
      <NavbarContent justify="center" className="max-lg:hidden">
        {links.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              className="text-font-primary hover:text-font-primary-active"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenuToggle className="lg:hidden" />
      <NavbarMenu>
        {links.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link className="w-full" href={item.href} size="lg" onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
