import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">TalhaDev</h2>
          <p className="text-gray-400">
            Building modern, responsive, and high-performance web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400"
                    : "hover:text-indigo-400 transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400"
                    : "hover:text-indigo-400 transition-colors duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400"
                    : "hover:text-indigo-400 transition-colors duration-300"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400"
                    : "hover:text-indigo-400 transition-colors duration-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 mb-1">Email: aitech323@gmail.com</p>
          <p className="text-gray-400 mb-1">Phone: +92 31 95027234</p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TalhaDev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
