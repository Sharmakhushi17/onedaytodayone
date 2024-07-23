import React from "react";
import { useState } from "react";
import ToggleSwitch from "./Toggle.jsx";
import price from "../assets/images/price.jpg";
import PricingCard from "./PricingCard.jsx";

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  console.log(isChecked);
  const array1 = [
    {
      title: "Magazine Pricing",
      price: "₹1999/- or 24USD",
      points: [
        "Coverage in different industries",
        "Coverage in schools & colleges",
        "Coverage in different national and international conferences",
        "Coverage in different newspapers and media",
        "Profile coverage in the magazine",
        "Company products and services catalog included",
        "Success stories milestone",
        "Coverage on our different social media platforms (till1 month)",
        "For printed magazines (some additional charges included)",
      ],
    },
    {
      title: "Books Pricing",
      price: "₹2999/- or 36USD",
      points: [
        "Book writing & designing, publishing and advertising at one platform.",
        "Coverage in different industries",
        "Coverage in schools & colleges",
        "Coverage in different national and international conferences",
        "Coverage in different newspapers and media",
        "Profile coverage in the book",
        "Company products and services catalog included",
        "Success stories milestone",
        "Coverage on our different social media platforms (till 1 month)",
        "For printed Books (some additional charges included)",
      ],
    },
  ];
  const array2 = [
    {
      title: "Books Pricing",
      price: "₹2999/- or 36USD",
      points: [
        "Book writing & designing, publishing and advertising at one platform.",
      ],
    },
    {
      title: "Books Pricing",
      price: "₹2999/- or 36USD",
      points: [
        "Book writing & designing, publishing and advertising at one platform.",
      ],
    },
  ];
  return (
    <div className="bg-[black] text-[white] items-center overflow-x-hidden">
      <div className="text-[gray] text-center font-inter-tight  flex flex-col items-center justify-center font-semibold ">
        <span className="mt-[10rem] mb-[1rem]  text-[1rem] ">POWER UP</span>
      </div>
      <div className="text-center font-instrument mainHeading font-semibold flex flex-col items-center justify-center leading-[8rem] tracking-[-0.4rem] mt-2 title">
        <span data-aos="fade-up">MEMBERSHIP</span>
        <span data-aos="fade-up">PLANS</span>
      </div>
      <div className="flex items-center justify-center mt-8">
        <ToggleSwitch isChecked={isChecked} toggleSwitch={toggleSwitch} />
      </div>
      <div className="p-4 mt-8">
        <PricingCard data={isChecked ? array2 : array1} />
      </div>
    </div>
  );
};

export default Pricing;
