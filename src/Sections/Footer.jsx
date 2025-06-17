import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-32 pb-3">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tanzeel Mir. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 sm:mt-0 items-center text-lg">
          {/* Email (can keep this as text/icon if you want) */}
          <a
            href="mailto:your.email@example.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <i className="si si-mail"></i>
          </a>

          {/* GitHub (Image-Based Icon) */}
          <a
            href="https://github.com/AryanMir15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt="GitHub"
              className="w-5 h-5"
            />
          </a>

          {/* LinkedIn (Image-Based Icon) */}
          <a
            href="https://www.linkedin.com/in/tanzeel-mir-45615734b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/s/99Qb1zE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/fiverr.png"
              alt="Fiverr"
              className="w-5 h-5"
            />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/Tanzeelmirr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/x--v1.png"
              alt="X logo"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
