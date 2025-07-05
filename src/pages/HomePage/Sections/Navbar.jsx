import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Moon } from "lucide-react";

export default function NavbarCom() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "Projects", "About"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href={`#${item.toLowerCase()}`}
            className="flex items-center text-foreground hover:underline"
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar
      className={`z-50 sticky top-0 w-full px-4 py-2 shadow-md
    bg-background/80 dark:bg-background/30 backdrop-blur-md
    rounded-md h-14
    lg:top-4 lg:left-4 lg:right-4 lg:mx-auto lg:max-w-6xl lg:rounded-full lg:h-auto`}
    >
      <div className="flex items-center justify-between text-foreground">
        {/* Left: Theme toggle + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-foreground"
          >
            <Moon className="h-5 w-5" />
          </button>
          <Typography
            as="a"
            href="#"
            className="cursor-pointer font-bold text-sm lg:text-base text-foreground"
          >
            TanzeelMir
          </Typography>
        </div>

        {/* Center nav (desktop only) */}
        <div className="hidden lg:block">{navList}</div>

        {/* Right side: Contact CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden lg:inline-block bg-black text-white dark:bg-white dark:text-black transition-colors"
          >
            <span>Contact Me</span>
          </Button>

          {/* Centered Menu Icon on mobile */}
          {/* Clean Custom Mobile Menu Toggle */}
          <div className="flex items-center justify-center lg:hidden h-10 w-10">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="h-10 w-10 flex items-center justify-center text-foreground"
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Collapse open={openNav}>
        <div className="mt-2 rounded-md bg-background/90 dark:bg-background/80 backdrop-blur-md shadow-md p-4">
          {navList}
          <Button
            fullWidth
            size="sm"
            className="mt-2 bg-black text-white dark:bg-white dark:text-black transition-colors"
          >
            <span>Contact Me</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
