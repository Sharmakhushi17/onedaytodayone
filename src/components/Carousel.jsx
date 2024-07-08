// import React from "react";
// import "./Component.css";

// const SlidingCarousel = ({ images }) => {
//   return (
//     <div className="slider-Testimonials flex mt-[8rem] ">
//       <div className="slide-track-Testimonials">
//         {images.map((URL, index) => (
//           <div key={index}>
//             <img
//               alt="..."
//               className={"image h-[5rem] w-[5rem]" + index}
//               src={URL}
//             />
//           </div>
//         ))}
//         {images.map((URL, index) => (
//           <div key={index}>
//             <img alt="..." className={"image" + index} src={URL} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SlidingCarousel;

import React from "react";
import "./Component.css";
import magazine from "../assets/images/magazine.jpg";
import interview from "../assets/images/interview.jpg";
import books from "../assets/images/Books.jpg";
import articles from "../assets/images/Articles.jpg";
import story from "../assets/images/SuccessStory.jpg";
import insights from "../assets/images/Insights.jpg";

const Carousel = ({ direction }) => {
  const slides = [magazine, interview, books, articles, story, insights];

  return (
    <div className="carousel">
      <div className={`carousel-track ${direction}`}>
        {slides.concat(slides).map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img src={slide} alt={`Slide ${(index % slides.length) + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
