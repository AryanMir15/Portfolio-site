import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-10">
          Got a project or just wanna chat? Shoot me an email directly at{" "}
          <a
            href="mailto:tanzeelmir112@gmail.com"
            className="text-indigo-400 hover:underline"
          >
            tanzeelmir112@gmail.com
          </a>{" "}
          — I’ll hit you back as soon as I can.
        </p>
      </div>
    </section>
  );
};

export default Contact;
