import React from "react";
import "./commonStyles.css";

const Card = ({ data }) => {
  return (
    <div className="w-[45%]  rounded-[1rem] border-[Gray]">
      <img
        src={data.img}
        alt="card-img"
        className="rounded-t-[1rem] h-[30rem] card-image"
      />
      <p className="font-instrument text-[2rem] bg-[#0a0a0a] p-[1rem] pl-[2rem] rounded-b-[1rem] border-[Gray] border-b-[1px]">
        {data.title}
      </p>
    </div>
  );
};

export default Card;
