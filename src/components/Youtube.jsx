import React from "react";
import interview from "../assets/images/interview.jpg";
import Carousel from "./Carousel";
import CardComponent from "./CardComponent";
import CardContent from "./CardContent";
import articles from "../assets/images/Articles.jpg";
import story from "../assets/images/SuccessStory.jpg";

const slides = [
  interview,
  interview,
  interview,
  interview,
  interview,
  interview,
];
const cards = [
  { img: articles, title: "Articles", path: "/articles" },
  { img: story, title: "Success stories", path: "/success" },
];
const Youtube = () => {
  const YoutubeData = [
    { title: "Interviews", content: "https://youtu.be/TjU5h5x3GPc" },
    { title: "Interviews", content: "https://youtu.be/TjU5h5x3GPc" },
    { title: "Interviews", content: "https://youtu.be/TjU5h5x3GPc" },
    { title: "Interviews", content: "https://youtu.be/TjU5h5x3GPc" },
  ];
  return (
    <div className="bg-[black] text-[white]">
      <div className="flex items-center text-center py-[5rem] px-[3rem]">
        <div className="flex flex-col text-[white] text-[1.5rem] font-inter-tight  leading-[rem] tracking-tight ">
          <p className="text-[4rem] font-semibold">YOUTUBE INTERVIEWS</p>
          <p className="text-[gray] px-[8rem]">
            Step inside a Lightric Motors vehicle and experience the perfect
            fusion of luxury and efficiency. Our interiors are meticulously
            crafted with premium materials and cutting-edge technology to create
            driving experience.
          </p>
        </div>
      </div>
      <div className="py-[4rem]">
        <Carousel slides={slides} />
      </div>
      <div className="pl-[5rem]">
        <CardContent data={YoutubeData} />
      </div>{" "}
      <div className="py-5">
        <CardComponent cards={cards} />
      </div>
    </div>
  );
};

export default Youtube;
