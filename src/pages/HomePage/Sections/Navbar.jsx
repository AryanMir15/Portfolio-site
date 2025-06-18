import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const buildHref = (hash) => (isHome ? hash : `/#${hash.replace("#", "")}`);

  return (
    <div className="bg-gray-900 absolute left-0 right-0 top-0 h-12 flex items-center justify-center shadow-md z-50">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-200">
          <li>
            <a
              href="/"
              className="p-1 hover:text-white focus:outline-none"
              aria-label="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>

          <li className="text-gray-400">/</li>

          <li>
            <a
              href={buildHref("#projects")}
              className="inline-block px-3 py-1 rounded-md transition-colors hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Projects
            </a>
          </li>

          <li className="text-gray-400">/</li>

          <li>
            <a
              href={buildHref("#contact")}
              className="inline-block px-3 py-1 rounded-md transition-colors hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Contact
            </a>
          </li>

          <li className="text-gray-400">/</li>

          <li>
            <a
              href={buildHref("#skills")}
              className="inline-block px-3 py-1 rounded-md transition-colors hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Skills
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Navbar;
