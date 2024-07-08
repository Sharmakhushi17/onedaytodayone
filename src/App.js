import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./common/Navbar";
import Header from "./common/Header";
import Pricing from "./components/Pricing";
import Footer from "./common/Footer";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [route, setRoute] = useState("");
  const RouteChangeTracker = () => {
    const location = useLocation();

    useEffect(() => {
      setRoute(location.pathname);
    }, [location]);

    return null;
  };
  return (
    <Router>
      <Header route={route} />
      <RouteChangeTracker />
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
      <Footer route={route} />
    </Router>
  );
}
