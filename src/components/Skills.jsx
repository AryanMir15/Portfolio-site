import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* HTML */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-html5 text-orange-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">HTML5</p>
          </div>

          {/* CSS */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-css3 text-blue-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">CSS3</p>
          </div>

          {/* JavaScript */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-javascript text-yellow-300 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">JavaScript</p>
          </div>

          {/* React */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-react text-sky-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">React</p>
          </div>

          {/* Tailwind */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-tailwindcss text-cyan-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Tailwind CSS</p>
          </div>

          {/* Vite */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-vite text-purple-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Vite</p>
          </div>

          {/* Git */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-git text-orange-500 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Git</p>
          </div>

          {/* GitHub */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-github text-white text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">GitHub</p>
          </div>

          {/* Node.js */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow flex items-center flex-col hover:shadow-lg transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-10 h-10 mb-3"
            />
            <p className="text-gray-200 font-medium">Node.js</p>
          </div>

          {/* Express */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-express text-gray-300 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Express</p>
          </div>

          {/* MongoDB */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <i className="si si-mongodb text-green-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
