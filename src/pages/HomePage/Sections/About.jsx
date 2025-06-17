import React from "react";

function About() {
  return (
    <section id="about" className="bg-gray-100 text-gray-900 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg leading-8 max-w-4xl mx-auto text-center">
          I'm a full-stack web developer specializing in the{" "}
          <strong>MERN stack</strong> — MongoDB, Express.js, React, and Node.js.
          I build modern, scalable, and high-performance web applications from
          front to back. My approach is rooted in clean architecture, efficient
          code, and a deep understanding of user-centric design.
        </p>
        <p className="text-lg leading-8 max-w-4xl mx-auto text-center mt-6">
          With hands-on experience in both client-side and server-side
          development, I handle everything from responsive UIs to backend APIs
          and database design. Whether it's building complex dashboards,
          integrating third-party services, or optimizing for performance — I
          deliver reliable solutions that just work.
        </p>
      </div>
    </section>
  );
}

export default About;
