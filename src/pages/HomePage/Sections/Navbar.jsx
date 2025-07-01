import React, { useState } from "react";

const navItems = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
];

export default function FancyNavbar() {
  const [activeHash, setActiveHash] = useState("#home");

  const handleClick = (e, hash) => {
    e.preventDefault(); // stop default jump
    setActiveHash(hash);

    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "auto" }); // no smooth
    }

    // OR if you still want instant jump:
    // window.location.hash = hash;
  };

  return (
    <header className="fixed top-6 left-6 right-6 z-50 flex mx-auto ">
      <div
        className="flex items-centers md:w-[34rem] lg:w-[46rem]  justify-evenly lg:w-6xl max-h-96 md:h-11 mx-auto bg-black rounded-full px-4 py-[6px] border border-none shadow-[0_3px_12px_rgba(0,0,0,0.6)] bg-black/50 backdrop-blur-md

"
      >
        {/* Center - Nav links */}
        <div className="flex items-center justify-evenly md:gap-4 lg:gap-6">
          {navItems.map((item) => {
            const isActive = activeHash === item.hash;
            return (
              <a
                key={item.name}
                href={item.hash}
                onClick={(e) => handleClick(e, item.hash)}
                className={`text-[8px] md:text-[10px] lg:text-[12px] border-[px] px-4 py-1 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "bg-white backdrop-blur-md text-black border border-none"
                    : "text-white hover:bg-gray-200 hover:text-black"
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <a
            href="#contact"
            className="text-[8px] md:text-[10px] lg:text-[12px] px-4 text-center text-nowrap py-1 rounded-full text-black bg-white hover:bg-gray-200 border-white cursor-pointer transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
