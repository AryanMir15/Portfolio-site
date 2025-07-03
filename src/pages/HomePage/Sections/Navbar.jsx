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
    <Navbar className="sticky top-4 left-4 right-4 z-50 max-w-6xl mx-auto rounded-full backdrop-blur-md bg-background/80 dark:bg-background/30 px-4 py-2 shadow-md">
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

          <IconButton
            variant="text"
            className="lg:hidden text-foreground"
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
        <Button
          fullWidth
          size="sm"
          className="mt-2 bg-black text-white dark:bg-white dark:text-black transition-colors"
        >
          <span>Contact Me</span>
        </Button>
      </Collapse>
    </Navbar>
  );
}
