import React from "react";
import Navbar from "./pages/HomePage/Sections/Navbar";
import Hero from "./pages/HomePage/Sections/Hero";
import About from "./pages/HomePage/Sections/About";
import Skills from "./pages/HomePage/Sections/Skills";
import Projects from "./pages/HomePage/Sections/Projects";
import Footer from "./pages/HomePage/Sections/Footer";
import Faq from "./pages/HomePage/Sections/FAQ";
import Contact from "./pages/HomePage/Sections/Contact";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import SingleProject from "./pages/SingleProject/SingleProject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<SingleProject />} />
    </Routes>
  );
}

export default App;
