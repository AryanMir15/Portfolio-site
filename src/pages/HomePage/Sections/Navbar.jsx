import React, { useState, useEffect } from "react";
import { Navbar, Collapse, Button, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { scrollTo } from "../../../utils/smoothScroll";

export default function NavbarCom() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const navItems = [
    { label: "Home", href: "/#home", isHash: true },
    { label: "Projects", href: "/#projects", isHash: true },
    { label: "About", href: "/#about", isHash: true },
    { label: "Learn More", href: "/learn-more", isHash: false },
  ];

  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography
          key={item.label}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          {item.isHash ? (
            <a
              href={item.href}
              className="flex items-center text-foreground transition-colors hover:text-neutral-300 dark:hover:text-neutral-400 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const sectionId = item.href.split('#')[1];
                scrollTo(sectionId);
                setOpenNav(false);
              }}
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.href}
              className="flex items-center text-foreground transition-colors hover:text-neutral-300 dark:hover:text-neutral-400"
              onClick={() => setOpenNav(false)}
            >
              {item.label}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar
        className={`w-full px-4 py-2 shadow-md
        bg-background/80 dark:bg-background/30 backdrop-blur-md
        rounded-none h-14
        lg:mx-auto lg:max-w-6xl lg:rounded-md lg:h-auto lg:mt-4`}
      >
      <div className="flex items-center justify-between text-foreground">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Typography
            as="a"
            href="/"
            className="cursor-pointer font-bold text-sm lg:text-base text-foreground"
          >
            TanzeelMir
          </Typography>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:block">{navList}</div>

        {/* Right side: Contact CTA + Mobile toggle */}
        {/* Right side: Contact CTA (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-200 font-semibold"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile menu toggle (Mobile only) */}
        <div className="flex lg:hidden items-center justify-center h-10 w-10">
          <button
            onClick={() => setOpenNav(!openNav)}
            className="h-10 w-10 flex items-center justify-center text-foreground"
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Collapse open={openNav}>
        <div className="mt-2 rounded-md bg-background/90 dark:bg-background/80 backdrop-blur-md shadow-md p-4">
          {navList}
          <Link to="/contact">
            <Button
              fullWidth
              size="sm"
              className="w-full mt-2 px-4 py-2 text-sm rounded-xl border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-200 font-semibold"
            >
              <span>Contact Me</span>
            </Button>
          </Link>
        </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
