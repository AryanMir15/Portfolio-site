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
          Got a project or just want to say hey? Drop a message below — I’ll hit
          you back as soon as I'm Available.
        </p>

        <form className="space-y-8 text-left">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
              className="peer w-full bg-gray-800 text-white rounded-md px-4 pt-6 pb-2 border border-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              className="peer w-full bg-gray-800 text-white rounded-md px-4 pt-6 pb-2 border border-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400"
            >
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your message"
              required
              className="peer w-full bg-gray-800 text-white rounded-md px-4 pt-6 pb-2 border border-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400"
            >
              Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
