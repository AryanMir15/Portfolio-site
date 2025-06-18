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
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(255,102,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,102,0,0.7)] transition duration-300">
            <i className="si si-html5 text-orange-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">HTML5</p>
          </div>

          {/* CSS */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(0,153,255,0.1)] hover:shadow-[0_8px_30px_rgba(0,153,255,0.7)] transition duration-300">
            <i className="si si-css3 text-blue-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">CSS3</p>
          </div>

          {/* JavaScript */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(255,221,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,221,0,0.6)] transition duration-300">
            <i className="si si-javascript text-yellow-300 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">JavaScript</p>
          </div>

          {/* React */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(56,189,248,0.1)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.7)] transition duration-300">
            <i className="si si-react text-sky-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">React</p>
          </div>

          {/* Tailwind */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(103,232,249,0.1)] hover:shadow-[0_8px_30px_rgba(103,232,249,0.7)] transition duration-300">
            <i className="si si-tailwindcss text-cyan-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Tailwind CSS</p>
          </div>

          {/* Vite */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(192,132,252,0.1)] hover:shadow-[0_8px_30px_rgba(192,132,252,0.7)] transition duration-300">
            <i className="si si-vite text-purple-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Vite</p>
          </div>

          {/* Git */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(255,115,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,115,0,0.7)] transition duration-300">
            <i className="si si-git text-orange-500 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Git</p>
          </div>

          {/* GitHub */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(255,255,255,0.06)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition duration-300">
            <i className="si si-github text-white text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">GitHub</p>
          </div>

          {/* Node.js */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(34,197,94,0.1)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.7)] transition duration-300 flex items-center flex-col">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-10 h-10 mb-3"
            />
            <p className="text-gray-200 font-medium">Node.js</p>
          </div>

          {/* Express */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(203,213,225,0.06)] hover:shadow-[0_8px_30px_rgba(203,213,225,0.4)] transition duration-300">
            <i className="si si-express text-gray-300 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">Express</p>
          </div>

          {/* MongoDB */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0_8px_rgba(52,211,153,0.1)] hover:shadow-[0_8px_30px_rgba(52,211,153,0.7)] transition duration-300">
            <i className="si si-mongodb text-green-400 text-4xl mb-3"></i>
            <p className="text-gray-200 font-medium">MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
