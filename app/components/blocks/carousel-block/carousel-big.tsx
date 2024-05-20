"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const OPTIONS = { loop: true };

export const CarouselBig = (props: any) => {
  const [emblaRef] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const imgPath = () => (props.isMobile ? "./carousel/phone/" : "./carousel/");

  return (
    <div className="embla min-h-fit md:min-h-96" ref={emblaRef}>
      {" "}
      <div className="embla__container min-h-fit md:min-h-96">
        {" "}
        <div className="embla__slide" key={1}>
          <img
            alt="golden sign for beauty business"
            className="carousel-img"
            src={imgPath() + "1.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={2}>
          <img
            alt="luxury gold letters with light"
            className="carousel-img"
            src={imgPath() + "2.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={3}>
          <img
            alt="restaurant LED sign"
            className="carousel-img"
            src={imgPath() + "3.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={4}>
          <img
            alt={"retail Mall sign indoor channel letters"}
            className="carousel-img"
            src={imgPath() + "4.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={11}>
          <img
            alt="pizza store marquee sign"
            className="carousel-img"
            src={imgPath() + "11.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={12}>
          <img
            alt="window decals sticker"
            className="carousel-img"
            src={imgPath() + "12.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={5}>
          <img
            alt="store front sign"
            className="carousel-img"
            src={imgPath() + "5.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={6}>
          <img
            alt="fast food sign"
            className="carousel-img"
            src={imgPath() + "6.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={13}>
          <img
            alt="outdoor plaza sign and pylon"
            className="carousel-img"
            src={imgPath() + "13.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={7}>
          <img
            alt="restaurants halo sign"
            className="carousel-img"
            src={imgPath() + "7.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={8}>
          <img
            alt="lit up sign"
            className="carousel-img"
            src={imgPath() + "8.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={9}>
          <img
            alt="royal sign"
            className="carousel-img"
            src={imgPath() + "9.webp"}
          />
        </div>{" "}
        <div className="embla__slide" key={10}>
          <img
            alt="store LED box sign"
            className="carousel-img"
            src={imgPath() + "10.webp"}
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
};
