import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Header from "./components/layout/Header";
import HomePage from "./pages/home";
import Footer from "./components/layout/Footer";
import { useContentProtection } from "./hooks/useContentProtection";

const App = () => {
  useContentProtection();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
