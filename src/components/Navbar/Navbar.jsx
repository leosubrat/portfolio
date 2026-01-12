import React from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { SiCodingninjas } from "react-icons/si";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo section */}
            <div className="text-2xl flex items-center gap-4 font-bold uppercase">
              <SiCodingninjas />
              <div className="flex gap-2">
                <p>Subrat</p>
                <p className="primary">Thapa</p>
              </div>
            </div>

            {/* Menu section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="text-[20px] font-semibold text-gray-600 inline-block py-1 px-3 hover:text-[var(--color-primary)] cursor-pointer">
                  Home
                </li>
                <li className="text-[20px] font-semibold text-gray-600 inline-block py-1 px-3 hover:text-[var(--color-primary)] cursor-pointer">
                  Projects
                </li>
                <li className="text-[20px] font-semibold text-gray-600 inline-block py-1 px-3 hover:text-[var(--color-primary)] cursor-pointer">
                  About
                </li>
              </ul>
            </div>

            {/* Mobile hamburger menu section */}
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <MdMenu className="text-4xl hamburger-hover" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
