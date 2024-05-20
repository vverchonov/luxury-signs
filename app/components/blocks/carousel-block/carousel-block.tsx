"use client";
import { useEffect, useState } from "react";
import { CarouselBig } from "./carousel-big";

export const CarouselBlock = () => {
  const [windowSize, setWindowSize] = useState(0);
  const isMobile = windowSize < 1000 ? true : false;

  useEffect(() => {
    const onResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <section id={"carousel-block"} className="w-full min-h-fit md:min-h-96">
      <CarouselBig isMobile={isMobile} />
    </section>
  );
};
