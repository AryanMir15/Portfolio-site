import React, { useEffect } from "react";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import AmazonClone from "./pages/SingleProject/amazon-clone";
import ApiProject from "./pages/SingleProject/api";
import CocktailProject from "./pages/SingleProject/cocktail";
import ScrollToTop from "./utils/ScrollToTop";
import LearnMore from "./pages/LearnMore";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/amazon-clone" element={<AmazonClone />} />
        <Route path="/projects/jobs-API-Backend" element={<ApiProject />} />
        <Route
          path="/projects/cocktail-explorer"
          element={<CocktailProject />}
        />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </>
  );
}

export default App;
