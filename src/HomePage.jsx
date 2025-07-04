import React from "react";
import NavbarCom from "./pages/HomePage/Sections/Navbar";
import Hero from "./pages/HomePage/Sections/Hero";
import About from "./pages/HomePage/Sections/About";
import Skills from "./pages/HomePage/Sections/Skills";
import Projects from "./pages/HomePage/Sections/Projects";
import Footer from "./pages/HomePage/Sections/Footer";
import Faq from "./pages/HomePage/Sections/FAQ";
import Contact from "./pages/HomePage/Sections/Contact";
import Categories from "./Boiler Components/Categories";

function HomePage() {
  return (
    <>
      <NavbarCom />
      <Hero />
      <Projects />
      <About />

      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
