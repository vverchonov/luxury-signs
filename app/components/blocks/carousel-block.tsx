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
    <section className="w-full min-h-96">
      <div className="embla min-h-96" ref={emblaRef}>
        {" "}
        <div className="embla__container min-h-96">
          {" "}
          <div className="embla__slide" key={1}>
            <img
              className="carousel-img"
              src="https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Abstract_LinkedIn_Background.png?v=1627912075"
            />
          </div>{" "}
          <div className="embla__slide" key={2}>
            <img
              className="carousel-img"
              src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
            />
          </div>{" "}
          <div className="embla__slide" key={3}>
            <img
              className="carousel-img"
              src="https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Abstract_LinkedIn_Background.png?v=1627912075"
            />
          </div>{" "}
          <div className="embla__slide" key={4}>
            <img
              className="carousel-img"
              src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
            />
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};
