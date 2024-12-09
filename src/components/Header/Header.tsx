import React from "react";
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
  { label: "Who am I?" },
  { label: "My skills" },
  { label: "My career" },
];

const Header = () => {
  return (
    <Navbar>
      <Logo />
      <NavbarContent justify="center" className="max-lg:hidden">
        {links.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              className="text-font-primary hover:text-font-primary-active"
              href="#"
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
            <Link className="w-full" href="#" size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
