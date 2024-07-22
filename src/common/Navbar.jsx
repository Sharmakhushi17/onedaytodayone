import React from "react";
import "./commonStyles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "../common/Footer";

const Navbar = () => {
  const navbarItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "PRICING", path: "/pricing" },
    { name: "CONTACT", path: "/contacts" },
  ];
  return (
    <div className="min-h-[74vh] w-[100%] bg-[black] flex items-center justify-center text-[white] navpage">
      <div className=" items-center justify-center flex flex-col font-instrument heading font-semibold  mb-[1rem] navbar-menu nav-item">
        {navbarItems.map((element) => (
          <Link
            to={element.path}
            className="leading-[6.5rem] cursor-pointer nav-item transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 hover:text-[black]  duration-300 ..."
          >
            {element.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;

//  window.scrollTo(0, 0);
