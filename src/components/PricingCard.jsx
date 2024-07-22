import React from "react";
import Checked from "../assets/images/checked.png";
import "./Component.css";

const PricingCard = ({ data }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-[1rem] ">
        {data.map((cardData) => (
          <div className="border-[2px] border-[#FFFFFF12]  w-[40%] rounded-xl p-3 flex flex-col prices">
            <div
              className="  rounded-xl w-full h- 
                [20%] justify-center flex-col p-4 bg-[#0D0D0D]  pb-6"
            >
              <p className="text-[1.5rem] text-[white] font-semibold">
                {cardData.title}
              </p>
              <p className="text-[2.5rem] pt-8 font-bold">
                At just {cardData.price}
              </p>
            </div>
            <p className="pt-[5rem] text-[1.5rem] font-bold p-3">
              WHAT'S INCLUDED
            </p>
            <div className="flex flex-col p-8">
              {cardData.points.map((key) => (
                <div className="flex p-3 h-auto items-center">
                  <img
                    className="h-[2rem] w-[2rem]"
                    src={Checked}
                    alt="Image"
                  ></img>
                  <span className="text-[1.2rem] pl-5 text-[gray]">{key}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
