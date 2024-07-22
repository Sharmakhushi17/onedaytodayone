import React from "react";
import Card from "../common/Card";

const CardComponent = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-[4rem] justify-center items-center mt-[5rem] px-1 overflow-hidden card">
      {cards.map((cardData) => (
        <Card data={cardData} />
      ))}
    </div>
  );
};

export default CardComponent;
