import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Projects I've Built
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Amazon Clone */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Amazon Clone"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Amazon Clone</h3>
              <p className="text-gray-400 text-sm mb-4">
                A clone of the Amazon site built using vanilla HTML, CSS and
                JavaScript. Fully responsive and styled to mimic real product
                pages.
              </p>
              <div className="flex gap-4 text-xl">
                <i className="si si-html5 text-orange-400"></i>
                <i className="si si-css3 text-blue-400"></i>
                <i className="si si-javascript text-yellow-300"></i>
              </div>
            </div>
          </div>

          {/* Auth API */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Auth API"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Full Auth API</h3>
              <p className="text-gray-400 text-sm mb-4">
                Login / Register / CRUD / Protected routes / REST API. Made for
                scale & security.
              </p>
              <div className="flex gap-4 text-xl items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-6 h-6"
                />
                <i className="si si-express text-gray-300"></i>
                <i className="si si-mongodb text-green-400"></i>
              </div>
            </div>
          </div>

          {/* Cocktail Project */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Cocktail App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Cocktail App</h3>
              <p className="text-gray-400 text-sm mb-4">
                A React-based project fetching cocktail recipes from an external
                API. Dynamic search & detailed drink info included.
              </p>
              <div className="flex gap-4 text-xl">
                <i className="si si-react text-sky-400"></i>
                <i className="si si-javascript text-yellow-300"></i>
                <i className="si si-api text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
