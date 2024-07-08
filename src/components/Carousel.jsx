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

const Carousel = () => {
  const slides = ["", "Slide 2", "Slide 3", "Slide 4"];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {slides.concat(slides).map((slide, index) => (
          <div className="carousel-item" key={index}>
            <h3>{slide}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
