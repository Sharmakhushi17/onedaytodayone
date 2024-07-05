import React from "react";
import icon from "../assets/images/top-right.png";

const Footer = () => {
  const route = window.location.pathname;
  return (
    <div className="bg-[black] items-center text-[white] font-instrument font-semibold items-center flex-wrap overflow-x-hidden">
      {route !== "/navbar" ? (
        <div
          className=" text-center font-instrument text-[13rem] font-semibold  cursor-pointer mx-[1rem] mb-[-3rem] mt-[2rem]"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          1DAYTODAY1
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between mx-[3rem] pb-[4.2rem]">
        <span>© 2024 ALL RIGHTS RESERVED BY DFREENOVELISH</span>
        {route !== "/navbar" ? (
          <div className="flex gap-[1rem]">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        ) : (
          <ul className="flex justify-center gap-5  items-center ">
            <div>
              <li className="flex justify-center   items-center">
                FACEBOOK
                <img src={icon}></img>
              </li>
              <div className="underlines"></div>
            </div>
            <li className="flex justify-center   items-center">
              INSTAGRAM
              <img src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              TWITTER
              <img src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              LINKEDIN
              <img src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              PINTEREST
              <img src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              YOUTUBE
              <img src={icon}></img>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Footer;
