import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Projects", path: "/projects" },
    { id: 3, name: "About", path: "/about" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: FaInstagram,
      href: "https://www.instagram.com/leosubrat/",
      label: "Instagram",
    },
    {
      id: 2,
      icon: FaLinkedin,
      href: "https://linkedin.com/in/subrat-thapa",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: FaGithub,
      href: "https://github.com/leosubrat",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-white">
      {/* Top section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
            {/* Navigation */}
            <nav className="justify-self-center md:justify-self-start">
              <ul className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-lg font-semibold transition-colors ${
                          isActive
                            ? "primary"
                            : "text-gray-600 hover:text-[var(--color-primary)]"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end gap-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-2xl"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
