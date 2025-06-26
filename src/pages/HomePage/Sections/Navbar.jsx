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
    <header className="fixed top-6 left-6 right-6 z-50 flex justify-center items-center">
      <div className="flex items-center justify-between w-full max-w-6xl h-[70px] bg-black rounded-full px-6 border border-black shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
        {/* Left - Name */}
        <div className="text-white text-[1.1rem] font-semibold tracking-normal">
          TanzeelMir
        </div>

        {/* Center - Nav links */}
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeHash === item.hash;
            return (
              <a
                key={item.name}
                href={item.hash}
                onClick={(e) => handleClick(e, item.hash)}
                className={`text-xs px-4 py-1 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black border border-white"
                    : "text-white hover:bg-gray-200 hover:text-black"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right - Contact Me button */}
        <a
          href="#contact"
          className="text-xs px-4 py-3 rounded-full text-black bg-white hover:bg-gray-200 border-white cursor-pointer transition-all"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
