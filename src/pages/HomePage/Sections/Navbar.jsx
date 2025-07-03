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
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    return () => window.removeEventListener("resize", () => {});
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
            className="flex items-center text-black dark:text-white hover:underline"
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-4 left-4 right-4 z-50 max-w-6xl mx-auto rounded-full backdrop-blur-md bg-white/80 dark:bg-black/30 px-4 py-2 shadow-md">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* Left: Theme toggle + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-black dark:text-white"
          >
            <Moon className="h-5 w-5" />
          </button>
          <Typography
            as="a"
            href="#"
            className="cursor-pointer font-bold text-sm lg:text-base text-black dark:text-white"
          >
            TanzeelMir
          </Typography>
        </div>

        {/* Center nav (desktop only) */}
        <div className="hidden lg:block">{navList}</div>

        {/* Right side: CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Get Started</span>
          </Button>
          <IconButton
            variant="text"
            className="lg:hidden text-black dark:text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={openNav}>
        <div className="mt-2">{navList}</div>
        <Button fullWidth variant="gradient" size="sm" className="mt-2">
          <span>Get Started</span>
        </Button>
      </Collapse>
    </Navbar>
  );
}
