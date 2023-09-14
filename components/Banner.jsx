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
        <div className="object-fill overflow-hidden">
          <img
            // src="https://jabko.ua/image/cache/cataloge-2/silder-2/2023slider/airpods-pc-2-max-1700.jpg"
            src="https://img.jabko.ua/image/cache//catalog/products/2023/05/181643/imgonline-com-ua-Resize-8Db9fiHyfull.jpeg.webp"
            className="h-[500px]  aspect-[16/10] md:aspect-auto object-cover rounded-2xl"
            alt="logo"
          />
        </div>

        <div className="object-contain">
          <img
            src="https://jabko.ua/image/cache/cataloge-2/silder-2/2023slider/14-pro-max-pc-3-max-1700.jpg"
            className="h-[500px] aspect-[16/10] md:aspect-auto object-cover rounded-2xl"
            alt="logo"
          />
        </div>

        <div className="object-fill">
          <img
            src="https://jabko.ua/image/cache/cataloge-2/silder-2/2023slider/watch-ultra-pc-1-max-1700.jpg"
            className=" h-[500px] aspect-[16/10] md:aspect-auto object-cover rounded-2xl"
            alt="logo"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
