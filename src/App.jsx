import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";
import Faq from "./Sections/FAQ";
import Contact from "./Sections/Contact";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<HomePage />} />
    </Routes>
  );
}

export default App;
