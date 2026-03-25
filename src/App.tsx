import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import HomePage from "./pages/homepage";
import Footer from "./components/Footer";

const App = () => (
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

export default App;
