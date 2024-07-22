import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[black] text-[white] items-center overflow-x-hidden">
      <div className="text-[gray] text-center font-inter-tight  flex flex-col items-center justify-center font-semibold ">
        <span className="mt-[10rem] mb-[1rem]  text-[1rem] ">
          (2024-Present)
        </span>
      </div>
      <div className="text-center font-instrument mainHeading font-semibold flex flex-col items-center justify-center leading-[8rem] tracking-[-0.4rem] mt-2 title">
        <span data-aos="fade-up">GALLERY</span>
        <span data-aos="fade-up">ENDEAVORS</span>
      </div>
    </div>
  );
};

export default Gallery;
