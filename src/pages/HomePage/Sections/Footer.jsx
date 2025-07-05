import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-gray-300 pt-16 pb-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tanzeel Mir
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/" className="hover:underline transition">
              Home
            </Link>
            <Link to="/#about" className="hover:underline transition">
              About
            </Link>
            <Link to="/#projects" className="hover:underline transition">
              Projects
            </Link>
            <Link to="/contact-me" className="hover:underline transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-5 text-lg">
          <a
            href="mailto:tanzeelmir112@gmail.com"
            className="hover:text-black dark:hover:text-white transition"
            aria-label="Email"
          >
            <i className="si si-mail" />
          </a>
          <a
            href="https://github.com/AryanMir15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="GitHub"
              className="w-5 h-5 dark:invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tanzeel-mir-45615734b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5 dark:invert"
            />
          </a>
          <a
            href="https://www.fiverr.com/s/99Qb1zE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/fiverr.png"
              alt="Fiverr"
              className="w-5 h-5 dark:invert"
            />
          </a>
          <a
            href="https://x.com/Tanzeelmirr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/x--v1.png"
              alt="X logo"
              className="w-5 h-5 dark:invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
