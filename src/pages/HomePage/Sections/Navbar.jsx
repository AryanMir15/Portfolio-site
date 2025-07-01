import React, { useState } from "react";
import { Moon } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="flex items-center justify-between px-4 py-2 bg-transparent backdrop-blur-md text-black dark:text-white rounded-full max-w-6xl mx-auto w-full">
        {/* LEFT: Theme Toggle */}
        <div className="flex items-center gap-2 flex-1 justify-start">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-black dark:text-white"
          >
            <Moon className="w-5 h-5" />
          </button>

          {/* Logo (centered on small screens) */}
          <div className="lg:hidden flex-1 text-center font-bold text-base">
            TanzeelMir
          </div>
          <div className="hidden lg:block font-bold text-base">TanzeelMir</div>
        </div>

        {/* CENTER: Tabs on large screens */}
        <div className="hidden lg:flex flex-1 justify-end">
          <div
            role="tablist"
            className="tabs tabs-bordered flex items-center gap-4"
          >
            <a
              role="tab"
              href="#home"
              className="tab text-sm font-light text-black dark:text-white tab-active"
            >
              Home
            </a>
            <a
              role="tab"
              href="#projects"
              className="tab text-sm font-light text-black dark:text-white"
            >
              Projects
            </a>
            <a
              role="tab"
              href="#about"
              className="tab text-sm font-light text-black dark:text-white"
            >
              About
            </a>
          </div>
        </div>

        {/* RIGHT: Hamburger for small screens */}
        <div className="flex flex-1 justify-end items-center gap-2 lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 px-4">
          <ul className="menu bg-white dark:bg-neutral text-black dark:text-white rounded-box w-full p-2 shadow-md animate-fade-in">
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
