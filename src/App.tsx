import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Footer from "./components/Footer";
import ProjectPage from "./pages/projectpage";

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main> 
    <Footer />
  </>
);

export default App;