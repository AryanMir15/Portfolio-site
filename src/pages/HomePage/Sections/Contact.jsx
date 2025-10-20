import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:via-[#0e0e0e] dark:to-[#121212] text-center transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gray-900 dark:text-white leading-tight">
          Let’s build your next website <br className="hidden sm:block" />
          done right.
        </h2>

        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-[1.03] hover:shadow-md"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Contact;
