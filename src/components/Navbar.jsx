import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5"; // for hamburger icons

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-indigo-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
          TalhaDev
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-indigo-400 after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-400 after:rounded-full after:mt-1"
                      : "text-gray-300 hover:text-indigo-400 hover:scale-105"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setOpen(false)}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  `text-lg block transition-all duration-300 
                  ${
                    isActive
                      ? "text-indigo-400 font-semibold"
                      : "text-gray-300 hover:text-indigo-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
