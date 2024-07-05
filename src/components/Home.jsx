import React from "react";
import dot from "../assets/images/dot (1).png";

const Home = () => {
  return (
    <div className="bg-[black] text-[white] items-center ">
      <div className="text-[gray] text-center font-inter-tight  flex flex-col items-center justify-center font-semibold ">
        <span className="mt-[10rem] mb-[1rem]  text-[1.2rem] font-instrument flex flex-wrap items-center ">
          <img className="h-[3.5rem] mr-[-1rem] blink" src={dot}></img>
          WELCOME TO 1DAY TO DAY1 - WHERE DREAMS TAKE FLIGHT! WTIH YOUR GUIDE
        </span>
      </div>
      <div className="text-center font-instrument text-[9rem] font-semibold flex flex-col items-center justify-center leading-[8rem] tracking-[-0.4rem] mt-2">
        <span>DIVYA</span>
        <span>BHARDWAJ</span>
      </div>
    </div>
  );
};

export default Home;
