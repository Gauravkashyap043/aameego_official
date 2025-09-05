
import './App.css'
// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from './pages/Aboutus';
import TermsCondition from './pages/TermsCondition';

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20"> {/* padding to avoid header overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

