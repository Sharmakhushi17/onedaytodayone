import React from "react";
import CardComponent from "./CardComponent";
import magazine from "../assets/images/magazine.jpg";
import interview from "../assets/images/interview.jpg";
import books from "../assets/images/Books.jpg";
import articles from "../assets/images/Articles.jpg";
import story from "../assets/images/SuccessStory.jpg";
import insights from "../assets/images/Insights.jpg";

// Example data for cards
const Services = () => {
  const cards = [
    { img: magazine, title: "Magazines" },
    { img: interview, title: "YouTube Interviews" },
    { img: books, title: "Books" },
    { img: articles, title: "Articles" },
    { img: story, title: "Success stories" },
    { img: insights, title: "Guided Insights" },
  ];
  return (
    <div className="bg-[black] text-[white] items-center overflow-x-hidden">
      <div className="text-[gray] text-center font-inter-tight  flex flex-col items-center justify-center font-semibold ">
        <span className="mt-[10rem] mb-[1rem]  text-[1rem] ">
          (2024-Present)
        </span>
      </div>
      <div className="text-center font-instrument text-[7rem] font-semibold flex flex-col items-center justify-center leading-[6rem] tracking-[-0.4rem] mt-2">
        <span>DRIVING</span>
        <span>ENTREPRENEURSHIP</span>
        <span> TRIUMPHS</span>
      </div>
      <CardComponent cards={cards} />
    </div>
  );
};

export default Services;
