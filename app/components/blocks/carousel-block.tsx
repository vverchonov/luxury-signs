"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const OPTIONS = { loop: true };

export const CarouselBlock = () => {
  const [emblaRef] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  return (
    <section id={"carousel-block"} className="w-full min-h-fit md:min-h-96">
      <div className="embla min-h-fit md:min-h-96" ref={emblaRef}>
        {" "}
        <div className="embla__container min-h-fit md:min-h-96">
          {" "}
          <div className="embla__slide" key={1}>
            <img className="carousel-img" src="./carousel/1.webp" />
          </div>{" "}
          <div className="embla__slide" key={2}>
            <img className="carousel-img" src="./carousel/2.webp" />
          </div>{" "}
          <div className="embla__slide" key={3}>
            <img className="carousel-img" src="./carousel/3.webp" />
          </div>{" "}
          <div className="embla__slide" key={4}>
            <img className="carousel-img" src="./carousel/4.webp" />
          </div>{" "}
          <div className="embla__slide" key={5}>
            <img className="carousel-img" src="./carousel/5.webp" />
          </div>{" "}
          <div className="embla__slide" key={6}>
            <img className="carousel-img" src="./carousel/6.webp" />
          </div>{" "}
          <div className="embla__slide" key={7}>
            <img className="carousel-img" src="./carousel/7.webp" />
          </div>{" "}
          <div className="embla__slide" key={8}>
            <img className="carousel-img" src="./carousel/8.webp" />
          </div>{" "}
          <div className="embla__slide" key={9}>
            <img className="carousel-img" src="./carousel/9.webp" />
          </div>{" "}
          <div className="embla__slide" key={10}>
            <img className="carousel-img" src="./carousel/10.webp" />
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};
