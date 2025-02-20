import React from "react";
import dot from "../assets/images/dot (1).png";
import icon from "../assets/images/top-right.png";
// import story from "../assets/images/SuccessStory.jpg";
import CardComponent from "./CardComponent";
import magazine from "../assets/images/magazine.jpg";
import interview from "../assets/images/interview.jpg";
import books from "../assets/images/Books.jpg";
import articles from "../assets/images/Articles.jpg";
import story from "../assets/images/SuccessStory.jpg";
import insights from "../assets/images/Insights.jpg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import SlidingCarousel from "./Carousel";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mic from "../assets/images/webph3.jpg";
import magazine2 from "../assets/images/webph4.jpg";
import magazine3 from "../assets/images/webph5.jpg";
import photo from "../assets/images/1daytoday1 photo-modified.jpg";
import mic2 from "../assets/images/webph1.jpg";
import photo2 from "../assets/images/Photoo.jpg";
import signature from "../assets/images/sign.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on component mount
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const cards = [
    { img: magazine, title: "Magazines", path: "/magazine" },
    { img: interview, title: "YouTube Interviews", path: "/youtube" },
    { img: books, title: "Books", path: "/books" },
    { img: articles, title: "Articles", path: "/articles" },
    { img: story, title: "Success stories", path: "/success" },
    { img: insights, title: "Guided Insights", path: "/insights" },
  ];
  const slides1 = [logo, logo, logo, logo, logo, logo];
  const slides2 = [mic, mic, mic, mic, mic, mic];

  const faq = [
    {
      label: "What is 1DAYTODAY1 ?",
      content: [
        "1Day to Day1 is a platform dedicated to showcasing the success journeys of entrepreneurs from various industries. We aim to inspire and empower aspiring entrepreneurs through real-life stories and practical insights.",
      ],
    },
    {
      label: "How can 1DAYTODAY1 help me ?",
      content: [
        "We provide a wealth of resources including magazines, YouTube interviews, books, and articles that delve into the strategies, challenges, and triumphs of successful entrepreneurs. These stories offer motivation and guidance for your entrepreneurial journey.",
      ],
    },
    {
      label: "Who is behind 1DAYTODAY1 ?",
      content: [
        "1Day to Day1 is a venture of DFreeNovelish, founded by Divya Bhardwaj, an entrepreneur passionate about sharing inspiring stories and empowering others to pursue their dreams.",
      ],
    },
    {
      label: "How often is new content published ?",
      content: [
        "We strive to regularly update our platform with fresh content, including new interviews, articles, and insights to keep you informed and inspired.",
      ],
    },
    {
      label: "Can I contribute to 1DAYTODAY1 ?",
      content: [
        "Yes! We welcome contributions from entrepreneurs and thought leaders who have valuable insights to share. If you have a story or expertise to contribute, please reach out to us through our contact page.",
      ],
    },
    {
      label: "How can I stay updated with 1DAYTODAY1 ?",
      content: [
        "Follow us on social media and subscribe to our newsletter to receive the latest updates, interviews, and articles directly to your inbox. Join our community of like-minded individuals and stay connected with our growing network of entrepreneurial enthusiasts.",
      ],
    },
  ];

  const newspaperCarouselImg = [magazine, interview, books, articles, story];
  return (
    <div className="bg-[black] text-[white]">
      {/* <div className="flex flex-col justify-between  h-[75vh] title">
        <div
          data-aos="fade-up"
          className="bg-[black] text-[white] flex flex-col items-center justify-center "
        >
          <div className="text-[gray] text-center font-inter-tight  flex flex-col  items-center justify-center font-semibold ">
            <div className="mt-[7rem] mb-[1rem]  text-[1.2rem] font-instrument flex flex-wrap items-center ">
              <img
                data-aos="zoom-out"
                className="h-[3.5rem] mr-[-1rem] blink"
                src={dot}
              ></img>
              <span className="welcome">
                WELCOME TO 1DAY TO DAY1 - WHERE DREAMS TAKE FLIGHT! WITH YOUR
                GUIDE
              </span>
            </div>
          </div>
          <div className="text-center font-instrument mainHeading font-semibold flex flex-col items-center justify-center leading-[8rem] tracking-[-0.4rem] mt-2 name">
            <span>DIVYA</span>
            <span>BHARDWAJ</span>
          </div>
          <div className="flex justify-end w-full">
            <span className="w-[44%] flex text-[gray] font-instrument text-[1.1rem] font-normal">
              -CEO & Founder of DFREENOVELISH
            </span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-between pb-[1rem] font-instrument text-[1.1rem] font-semibold   bg-[black] text-[white] px-[2rem] pt-[4rem]"
        >
          <span className="text-[1.1rem]">BASED IN INDIA,UP</span>
          <div className="flex gap-[1rem]">
            <span className="text-[1.1rem]">
              VENTURE OF{" "}
              <Link
                className="text-[1.1rem]"
                to="https://www.dfreenovelish.com/"
              >
                DFREENOVELISH
              </Link>
            </span>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col justify-between p-[2.2rem] h-[74vh]">
        <div className="w-full flex flex-col justify-center h-[95%] items-center">
          <div className="flex items-center">
            <img
              data-aos="zoom-out"
              className="h-[3.5rem] mr-[-1rem] blink"
              src={dot}
            ></img>
            <span className="text-[1.1rem] welcome text-[gray] font-inter-tight font-semibold">
              WELCOME TO 1DAY TO DAY1 - WHERE DREAMS TAKE FLIGHT! WITH YOUR
              GUIDE
            </span>
          </div>
          <div className="w-[70%] flex items-center justify-center flex-col">
            <div className="flex flex-col items-center">
              <span className="leading-[8rem] font-instrument mainHeading tracking-[-0.4rem] name font-semibold">
                DIVYA
              </span>
              <span className="leading-[8rem] font-instrument mainHeading tracking-[-0.4rem] name font-semibold">
                BHARDWAJ
              </span>
              <div className="w-full flex justify-end text-[gray] font-instrument text-[1.1rem] font-normal">
                -CEO & Founder of{" "}
                <Link
                  className="text-[1.1rem]"
                  to="https://www.dfreenovelish.com/"
                >
                  DFREENOVELISH
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[1.1rem] font-instrument font-semibold text-white">
            BASED IN INDIA,UP
          </span>
          <span className="text-[1.1rem] font-instrument font-semibold text-white">
            VENTURE OF{" "}
            <a
              href="https://www.dfreenovelish.com/"
              className="text-[1.1rem] font-instrument font-semibold text-white"
            >
              DFREENOVELISH
            </a>
          </span>
        </div>
      </div>
      <div data-aos="fade-up" class="full-image-sec pt-30 full-image-style">
        <img
          decoding="async"
          className="px-[2rem] rounded-[5rem]"
          src={photo}
          alt=""
          width={"100%"}
          height={"60%"}
        />
      </div>
      <div className="flex flex-wrap pt-[10rem] px-[2rem]   justify-center">
        <div className="flex flex-col text-[white] subHeading font-inter-tight font-semibold w-[45rem] leading-[6rem] tracking-tight  ">
          <p data-aos="fade-up">SPOTLIGHT ON SUCCESS:</p>
          <p data-aos="fade-up">FEATURED </p>
          <p data-aos="fade-up">WORK </p>
        </div>
        <div className="flex flex-col text-[white] text-[1.6rem] font-inter-tight font-normal w-[45rem]  justify-center">
          <p>
            {" "}
            Welcome to 1Day to Day1, your hub for entrepreneurial inspiration.
            We offer magazines, YouTube interviews, books, and articles
            featuring the achievements of diverse entrepreneurs. Our goal is to
            bring you closer to their success stories and equip you for your own
            journey. I'm Divya Bhardwaj, your guide in this digital realm. With
            my creative spirit, I craft clear experiences out of ones and
            zeroes. Together, we'll explore the strategies, challenges, and
            triumphs of successful entrepreneurs.
          </p>
        </div>
      </div>
      <CardComponent cards={cards} />
      <div className=" bg-[color]  text-[white] heading font-instrument font-semibold leading-[7rem] tracking-tight pt-[15rem] flex flex-col items-center pb-[5rem] ">
        <p data-aos="fade-up" className="text-center">
          MORE ABOUT
        </p>
        <p data-aos="fade-up" className="text-center">
          1DAYTODAY1
        </p>
        <div className="img-box mob-logo mt-[5rem]">
          <div class="img-box-inner">
            <img
              data-aos="zoom-out"
              decoding="async"
              data-jarallax-element="-20 0"
              src={logo}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center font-instrument  font-semi-bold gap-[3rem]"
      >
        <p className="font-semibold text-[2rem] text-center w-[90%]">
          Located at the heart of entrepreneurial empowerment, Divya Bhardwaj is
          the visionary founder of DFreeNovelish and the driving force behind
          1Day to Day1. With a deep-seated commitment to sharing impactful
          entrepreneurial narratives, Divya's leadership fuels our mission to
          inspire and equip aspiring entrepreneurs worldwide.
        </p>
        <div className="w-full flex justify-center">
          <p className="w-[77%] text-center font-normal text-[1.5rem] px-[1.5rem]">
            Our platform is dedicated to showcasing the inspiring startup
            journeys of our clients. Each story is a testament to resilience,
            creativity, and the relentless pursuit of dreams. We highlight the
            unique experiences, breakthroughs, and lessons learned by
            entrepreneurs as they transform their visions into reality. By
            sharing these narratives, we aim to inspire and motivate others to
            embark on their entrepreneurial endeavors.
          </p>
        </div>

        <Link to="/contacts">
          <button className="bg-[white]  border-[2px] border-white  text-[black] rounded-[2rem] font-semibold w-[10rem] h-[4rem] text-[1.1rem] button navigatee">
            Share your story
          </button>
        </Link>
      </div>
      <div data-aos="fade-up" className="py-[5rem]">
        <Carousel slides={slides1} />
      </div>
      <div data-aos="fade-up" className="flex flex-wrap  pt-[6rem] px-[2rem]">
        <div className="flex flex-col text-[white] subHeading font-inter-tight font-semibold w-[42rem] leading-[6rem] tracking-tight  ">
          <p>MOTIVATION</p>
        </div>
        <div className="flex flex-col text-[white] text-[1.5rem] font-inter-tight font-bold w-[50rem] items-center">
          <p>
            Located at the heart of entrepreneurial empowerment, Divya Bhardwaj
            is the visionary founder of DFreeNovelish and the driving force
            behind 1Day to Day1. With a deep-seated commitment to sharing
            impactful entrepreneurial narratives, Divya's leadership fuels our
            mission to inspire and equip aspiring entrepreneurs worldwide.
          </p>
          <br />
          <p>
            At 1Day to Day1, we believe in the power of storytelling to inspire
            and guide. Whether you're seeking to overcome challenges, explore
            new ideas, or find inspiration for your next venture, our community
            is here to support you. Join us as we uncover the strategies and
            stories behind entrepreneurial achievement, helping you turn
            aspirations into reality.
          </p>

          <img
            className=" w-[20rem] h-[15rem]  "
            src={signature}
            alt="signature"
          ></img>
        </div>
      </div>
      <img
        className="h-[30%] w-[100%] mt-[3rem] px-[2rem] rounded-[5rem]"
        src={mic2}
      ></img>
      <div className=" flex flex-col text-[5rem] font-instrument font-semibold leading-[4rem] mt-[7rem]">
        <p data-aos="fade-up" data-aos-duration="1500" className="text-center">
          Trusted by
        </p>
        <p data-aos="fade-up" data-aos-duration="1500" className="text-center">
          {" "}
          Global brands
        </p>
      </div>
      <div data-aos="fade-up" className="pt-[5rem]">
        <Carousel direction="forward" slides={slides2} />
      </div>
      <div data-aos="fade-up" className="pb-[7rem] pt-[3rem]">
        <Carousel direction="reverse" slides={slides2} />
      </div>
      <img
        className="h-[100%] w-[100%] mt-[3rem] px-[2rem] rounded-[5rem]"
        src={magazine3}
      ></img>
      <div className=" flex flex-col text-[3rem] font-instrument font-semibold leading-[4rem] mt-[10rem]">
        <p data-aos="fade-up" className="text-center">
          FREQUENTLY
        </p>
        <p data-aos="fade-up" className="text-center">
          ASKED QUESTIONS
        </p>
      </div>

      {/* FAQ DROPDOWN */}
      <div
        data-aos="fade-up"
        className="flex-flex-col pl-[5rem] pt-[5rem] gap-[5rem]"
      >
        <div>
          {faq.map((item) => (
            <Dropdown label={item.label} content={item.content} />
          ))}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className=" bg-[color]  text-[white] heading font-instrument font-semibold leading-[7rem] tracking-tighter py-[10rem] flex flex-col items-center"
      >
        <p data-aos="fade-up" className="text-center">
          Let's Explore
        </p>
        <p data-aos="fade-up" className="text-center">
          Entrepreneurial
        </p>
        <p data-aos="fade-up" className="text-center">
          Success Together
        </p>
      </div>
      <div data-aos="fade-up" className="flex w-full justify-center mt-[-6rem]">
        <Link to="/contacts">
          <button className="bg-[white] border-[2px] border-white  text-[black] rounded-[2rem] font-semibold w-[10rem] h-[4rem] text-[1.2rem] buton navigatee">
            REGISTER NOW
          </button>
        </Link>
      </div>
      <div data-aos="fade-up" className="flex flex-col items-center py-[5rem]">
        <div className="img2-box">
          <div class="img2-box-inner rounded-[5rem]">
            <img
              data-aos="zoom-out"
              decoding="async"
              data-jarallax-element="-20 0"
              src={photo2}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p
            className="w-[77%] text-[1.2rem] text-center py-[3rem] font- 
         semibold font-instrument"
          >
            At 1DaytoDay1, we are proud to be a part of our clients'
            entrepreneurial journeys. We celebrate their achievements, learn
            from their challenges, and grow together as a community of
            innovators. Join us as we continue to pave the way for the next
            generation of entrepreneurs, and let's create a future filled with
            endless possibilities.
          </p>
        </div>
        <div className="flex justify-between text-[1.6rem] pb-3 px-2">
          <ul className="flex  flex-wrap justify-center gap-5  items-center cursor-pointer ">
            <li className="flex justify-center   items-center">
              FACEBOOK
              <img className="h-[1.5rem]" src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              INSTAGRAM
              <img className="h-[1.5rem]" src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              TWITTER
              <img className="h-[1.5rem]" src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              LINKEDIN
              <img className="h-[1.5rem]" src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              PINTEREST
              <img className="h-[1.5rem]" src={icon}></img>
            </li>
            <li className="flex justify-center   items-center">
              YOUTUBE
              <img className="h-[1.5rem]" src={icon}></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
