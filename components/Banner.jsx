import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";




const Banner = () => {
  return (
    <div className="relative text-white text-[20px] w-full h-[700px] ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        showArrows={false}
        animationHandler={"fade"}
        // renderArrowPrev={(clickHandler, hasPrev) => (
        //   <div
        //     onClick={clickHandler}
        //     className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
        //   >
        //     <BiArrowBack className="text-sm md:text-lg" />
        //   </div>
        // )}
        // renderArrowNext={(clickHandler, hasNext) => (
        //   <div
        //     onClick={clickHandler}
        //     className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
        //   >
        //     <BiArrowBack className="rotate-180 text-sm md:text-lg" />
        //   </div>
        // )}
      >
        <div>
          <img
            src="https://jabko.ua/image/cache/cataloge-2/silder-2/2023slider/airpods-pc-2-max-1700.jpg"
            className="h-[600px]  aspect-[16/10] md:aspect-auto object-cover rounded-2xl"
            alt="logo"
           
          />
        </div>

        <div>
          <img
            src="https://jabko.ua/image/cache/cataloge-2/silder-2/2023slider/14-pro-max-pc-3-max-1700.jpg"
            className="h-[600px] aspect-[16/10] md:aspect-auto object-cover rounded-2xl"
            alt="logo"
          />
        </div>

        <div>
          <img
            src="https://jabko.ua/image/cache/cataloge-2/silder-2/2023slider/watch-ultra-pc-1-max-1700.jpg"
            className="h-[600px] aspect-[16/10] md:aspect-auto object-cover rounded-2xl"
            alt="logo"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
