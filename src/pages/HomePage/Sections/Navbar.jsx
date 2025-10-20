import React, { useState, useEffect } from "react";
import { Navbar, Collapse, Button, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom"; // for full page route

export default function NavbarCom() {
  const [openNav, setOpenNav] = useState(false);

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
            <HashLink
              smooth
              to={item.href}
              className="flex items-center text-foreground transition-colors hover:text-neutral-500"
            >
              {item.label}
            </HashLink>
          ) : (
            <Link
              to={item.href}
              className="flex items-center text-foreground transition-colors hover:text-neutral-500"
            >
              {item.label}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar
      className={`z-50 sticky top-0 w-full px-4 py-2 shadow-md
      bg-background/80 dark:bg-background/30 backdrop-blur-md
      rounded-md h-14
      lg:top-4 lg:left-4 lg:right-4 lg:mx-auto lg:max-w-6xl lg:rounded-md lg:h-auto`}
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
          <Link to="/contact-me">
            <Button
              size="sm"
              className="bg-black text-white dark:bg-white dark:text-black transition-colors"
            >
              <span>Contact Me</span>
            </Button>
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
          <Link to="/contact-me">
            <Button
              fullWidth
              size="sm"
              className="mt-2 bg-black text-white dark:bg-white dark:text-black transition-colors"
            >
              <span>Contact Me</span>
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}
