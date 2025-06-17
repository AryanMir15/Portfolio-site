import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";
import Faq from "./Sections/FAQ";
import Contact from "./Sections/Contact";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
