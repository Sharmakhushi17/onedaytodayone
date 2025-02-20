import React from "react";

const ToggleSwitch = ({ isChecked, toggleSwitch }) => {
  return (
    <div className="flex items-center justify-center mt-[8rem] relative">
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer relative"
      >
        <div className="block border-2 border-white-500 w-[24.5rem] h-[4rem] rounded-full flex justify-between items-center text-[1.3rem] font-semibold font-instrument p-[2rem] relative">
          <span
            className={`z-20 relative text-[${isChecked ? "white" : "black"}] `}
          >
            Inspire Others
          </span>
          <span
            className={`z-10 pl-[0.5rem] relative text-[${
              isChecked ? "black" : "white"
            }]`}
          >
            Gain Insights
          </span>
        </div>
        <div
          className={`absolute left-1 top-[0.3rem] bg-white w-[12rem] h-[3.7rem] rounded-full transition-transform  ${
            isChecked ? "translate-x-[12rem] " : "translate-x-0 "
          }`}
        ></div>
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isChecked}
          onChange={toggleSwitch}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
