import React from "react";
import NavbarCom from "@/pages/HomePage/Sections/Navbar";
import Footer from "@/pages/HomePage/Sections/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <NavbarCom />

      <main className="grid min-h-[80vh] place-items-center bg-white dark:bg-[#0e0e0e] px-6 py-24 sm:py-32 lg:px-8 text-center text-foreground transition-colors duration-300">
        <div>
          <p className="text-base font-semibold text-[#46ecd5] dark:text-[#46ecd5] mb-4">
            404
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nothing here but tumbleweeds
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Looks like this page wandered off the internet. Either it doesn’t
            exist or it got deleted.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="
                inline-block px-6 py-3 rounded-md font-semibold bg-[#46ecd5] text-black
                hover:scale-[1.05] active:scale-[0.97] transition-all duration-300
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]
              "
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
