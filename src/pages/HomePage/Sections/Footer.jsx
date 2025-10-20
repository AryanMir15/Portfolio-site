import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-background text-foreground pt-16 pb-6 transition-colors duration-300 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center">
        {/* Left: Brand and Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tanzeel Mir
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <HashLink
              smooth
              to="/#home"
              className="hover:text-neutral-500 transition"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#about"
              className="hover:text-neutral-500 transition"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/#projects"
              className="hover:text-neutral-500 transition"
            >
              Projects
            </HashLink>
            <Link
              smooth
              to="/contact-me"
              className="hover:text-neutral-500 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-5 items-center justify-center sm:justify-end">
          {/* Email icon optional — no real icon used */}
          <a
            href="mailto:tanzeelmir112@gmail.com"
            className="hover:text-neutral-500 transition"
            aria-label="Email"
          >
            📧
          </a>

          <a
            href="https://github.com/AryanMir15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="GitHub"
              className="w-5 h-5 dark:invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tanzil-ur-rehman-mir-6bb494329"
            target="_blank"
            rel="noopener noreferrer"
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
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/x--v1.png"
              alt="X"
              className="w-5 h-5 dark:invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
