"use client";
import React from "react";
import { motion } from "framer-motion";
import { NavbarBrand } from "@nextui-org/react";

const LOGO_TEXT = "<- It's me :)";

const Logo = () => {
  return <NavbarBrand className="flex gap-2">
      <span className="text-4xl">👨‍💻</span>
      <div>
          {LOGO_TEXT.split("").map((item, index) => (
              <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: index / 100 }}
              >
                  {item}
              </motion.span>
          ))}
      </div>
  </NavbarBrand>;
};

export default Logo;
