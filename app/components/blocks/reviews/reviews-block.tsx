"use client";
import Slider from "react-slick";
import { Wrapper } from "../../common/wrapper";
import { Rating, Review } from "./review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useWidth } from "../../hooks/width-hook";

const testimonials = [
  {
    name: "Ben Blue",
    starRating: Rating.FIVE,
    comment:
      "Wow! The signage from this company completely transformed our business! Our foot traffic has doubled since we installed their eye-catching signs.",
  },
  {
    name: "George Brown",
    starRating: Rating.FIVE,
    comment:
      "I can't thank this signage company enough for their incredible work. Our sales have skyrocketed ever since we upgraded our signage strategy!",
  },
  {
    name: "Lily Green",
    starRating: Rating.FIVE,
    comment:
      "Absolutely blown away by the professionalism and creativity of this signage company. Our competitors are green with envy over our new signage!",
  },
  {
    name: "Peter Grey",
    starRating: Rating.FIVE,
    comment:
      "From concept to installation, this signage company exceeded all our expectations. Their attention to detail and commitment to quality are unmatched. Our business has never been more visible!",
  },
];

export const ReviewsBlock = () => {
  const windowWidth = useWidth();
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (window.innerWidth < 840) {
      setSettings({ ...settings, slidesToShow: 1 });
    }
  }, []);

  useLayoutEffect(() => {
    if (windowWidth === 0) {
      return;
    }
    if (windowWidth < 840) {
      if (settings.slidesToShow !== 1)
        setSettings({ ...settings, slidesToShow: 1 });
    } else {
      if (settings.slidesToShow !== 3)
        setSettings({ ...settings, slidesToShow: 3 });
    }
  }, [windowWidth]);

  const slider = useCallback(() => {
    return (
      <Slider {...settings} className="mb-8">
        {testimonials.map((item, key) => {
          return <Review review={item} key={windowWidth} />;
        })}
      </Slider>
    );
  }, [settings]);

  return (
    <Wrapper>
      <section className="m-h-[50vh] flex flex-col bg-white w-full text-center p-4 md:p-24">
        <h2 className="text-5xl font-semibold text-black mb-12">
          Testimonials
        </h2>
        {slider()}
      </section>
    </Wrapper>
  );
};
