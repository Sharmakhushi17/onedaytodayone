import React, { useEffect, useState } from "react";
import icon from "../assets/images/top-right.png";
import { Link } from "react-router-dom";

const Footer = ({ route }) => {
  return (
    <div className="bg-[black] text-[white] font-instrument font-semibold items-center  flex flex-col px-1 overflow-hidden">
      {route !== "/navbar" ? (
        <div
          // className=" text-center font-instrument text-[13rem] font-semibold  cursor-pointer mx-[1rem] mb-[-3rem] mt-[2rem] logo"
          className="flex flex-wrap justify-center items-center  font-semibold  cursor-pointer tracking-[1rem] w-[full] h-[19rem] pb-0 logo "
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          1DAYTODAY1
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-wrap justify-between mx-[3rem] pb-[4.2rem]  w-full px-[3.5rem] footer">
        <div
          className={`text-[1.2rem] pb-3  pt-0  ${
            route === "/navbar" ? "rights" : ""
          }`}
        >
          © 2024 ALL RIGHTS RESERVED BY{" "}
          <Link className="text-[1.2rem]" to="https://www.dfreenovelish.com/">
            DFREENOVELISH
          </Link>
        </div>
        {route !== "/navbar" ? (
          <div className="flex flex-wrap gap-[1rem] text-[1.2rem] pb-3 rights">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/Terms">Terms & Conditions</Link>
          </div>
        ) : (
          <div className="flex justify-between text-[1.2rem] pb-3 ">
            <ul className="flex  flex-wrap justify-center gap-5  items-center cursor-pointer social">
              <li className="flex justify-center   items-center">
                FACEBOOK
                <img className="h-[1.5rem]" src={icon}></img>
              </li>
              <li className="flex justify-center   items-center">
                INSTAGRAM
                <img className="h-[1.5rem]" src={icon}></img>
              </li>
              <li className="flex justify-center   items-center">
                TWITTER
                <img className="h-[1.5rem]" src={icon}></img>
              </li>
              <li className="flex justify-center   items-center">
                LINKEDIN
                <img className="h-[1.5rem]" src={icon}></img>
              </li>
              <li className="flex justify-center   items-center">
                PINTEREST
                <img className="h-[1.5rem]" src={icon}></img>
              </li>
              <li className="flex justify-center   items-center">
                YOUTUBE
                <img className="h-[1.5rem]" src={icon}></img>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
