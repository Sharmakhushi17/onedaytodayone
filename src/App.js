import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./common/Navbar";
import Header from "./common/Header";
import Pricing from "./components/Pricing";
import Footer from "./common/Footer";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/monthly" element={<MonthlyArticles />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
}
