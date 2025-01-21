import React from "react";
import { Divider } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col w-full gap-8 pb-8">
      <Divider />
      <span>{new Date().getFullYear()} ©</span>
    </div>
  );
};

export default Footer;
