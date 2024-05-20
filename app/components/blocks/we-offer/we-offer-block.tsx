"use client";
import { WeOfferItem } from "./we-offer-item";
import { Wrapper } from "../../common/wrapper";
import { useEffect, useState } from "react";

export const WeOfferBlock = () => {
  const [windowSize, setWindowSize] = useState(0);
  const [show, setShow] = useState(true);

  const isMobile = windowSize < 700 ? true : false;

  const onResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  useEffect(() => {
    onResize();
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [isMobile]);

  return (
    <Wrapper>
      <section
        id={"products-block"}
        className="w-full p-4 md:ps-48 md:pe-48 md:pb-24 md:pt-20"
      >
        <div className="flex w-full flex-col">
          <h2 className="md:ms-auto text-5xl md:text-8xl grey-text mb-12 md:mb-12 font-na font-bold px-8 md:px-0 md:mt-0 mt-8 ">
            WE OFFER
          </h2>
        </div>
        <div className="flex-container">
          <WeOfferItem
            imgAlt={"Store front sign 3D LED Channel letters"}
            name={"Front Lit Channel Letters"}
            text={
              "- These signs feature 3-dimensional letters with a clear acrylic face and are illuminated from the front, providing excellent visibility. They are constructed with either stainless steel or aluminum and are commonly used by well-known brands like McDonald’s or Tim Hortons."
            }
            image={"./we-offer/1.webp"}
          />
          <WeOfferItem
            imgAlt={"Luxury outdoor halo backlit letters sign"}
            name={"Backlit Channel Letters"}
            text={
              "- Offering a more luxurious appearance, these letters illuminate from behind, creating a halo effect as the light bounces off the building. They can be customized in various colors and are often used for businesses seeking a more sophisticated look."
            }
            image={"./we-offer/2.webp"}
          />
          <WeOfferItem
            imgAlt={" Luxury indoor outdoor golden sign"}
            name={" Golden Mirror Finish"}
            text={
              "- These signs add a touch of luxury with a golden mirror finish. They are popular among beauty businesses and retail in malls, providing a high-end appearance. They are less common in the Canadian signage industry, which makes them a unique choice for brands seeking exclusivity."
            }
            image={"./we-offer/3.webp"}
          />
          <WeOfferItem
            imgAlt={" Internally illustrated 3D LED signage "}
            name={"Front & Backlit Channel Letters"}
            text={
              "- A combination of front and backlighting, this type of sign is designed for high visibility and elegance. The front light ensures visibility, while the halo effect from the backlight adds a stylish touch."
            }
            image={"./we-offer/4.webp"}
          />
          {!isMobile || show ? (
            <>
              <WeOfferItem
                imgAlt={"Marquee lightbulb letters vintage sign "}
                name={"Marquee Letters"}
                text={
                  "- Marquee letters offer a vintage look with LED lighting. They are both bright and stylish, providing a classic appearance without the hassle of changing lightbulbs. This type is often chosen for businesses that want to evoke a nostalgic feel."
                }
                image={"./we-offer/5.webp"}
              />
              <WeOfferItem
                imgAlt={
                  "Indoor interior PVC Acrylic plastic laser cut beauty sign "
                }
                name={"Indoor Signs"}
                text={
                  "- These are intended for interior decoration and come in various materials such as gold, PVC, acrylic, and LED. The options are nearly limitless, allowing for custom shapes, sizes, colors, and designs."
                }
                image={"./we-offer/6.webp"}
              />
              <WeOfferItem
                imgAlt={"Lightbox acrylic front replacement light board sign"}
                name={"Light Boxes Front Replacement"}
                text={
                  "- An affordable solution for existing lightboxes, this involves replacing the front with custom-designed translucent prints or blockout cut material, providing a fresh look without the cost of completely new signage."
                }
                image={"./we-offer/7.webp"}
              />
              <WeOfferItem
                imgAlt={"Custom box sign LED double sided store sign logo"}
                name={"Custom Light Boxes"}
                text={
                  "- These are highly customizable, allowing for unique shapes, colors, lighting styles, and materials. They can accommodate complex designs and are ideal for distinctive branding."
                }
                image={"./we-offer/8.webp"}
              />
              <WeOfferItem
                imgAlt={"Window prints stickers perforated vinyl"}
                name={"Window Decals"}
                text={
                  "- These offer a variety of materials and styles, including high-quality prints, custom shapes, perforated films, and frosting. They can be used to brand storefronts and add design elements to windows."
                }
                image={"./we-offer/9.webp"}
              />
              <WeOfferItem
                imgAlt={"Custom wall restaurant and club neon sign"}
                name={"Neon Signs"}
                text={
                  "- Neon signs are bright and colorful, ideal for interior decoration. They can attract attention and serve as a marketing tool when customers take photos with them and share on social media."
                }
                image={"./we-offer/10.webp"}
              />
              <WeOfferItem
                imgAlt={"Unique endless mirror sign"}
                name={"Infinity Mirror Signs"}
                text={
                  "- These signs create a unique effect of infinite depth, giving the illusion of movement as you walk by. They are a novel addition to the signage industry and can be a captivating choice for businesses looking for something distinctive."
                }
                image={"./we-offer/11.webp"}
              />
            </>
          ) : (
            <></>
          )}
          {isMobile ? (
            <a
              onClick={() => {
                setShow(!show);
              }}
              type="button"
              className="mx-auto estim-button m-2 mt-auto text-white dark-back font-na font-semibold text-xl uppercase focus:ring-4 focus:outline-none focus:ring-white w-2/3 px-3 py-4 text-center transform transition duration-500 hover:scale-110"
            >
              {show ? "Show less" : "Show more"}
            </a>
          ) : (
            <></>
          )}
        </div>
        <p className="font-na text-lg md:text-3xl text-center mt-8 md:mt-16 px-8 md:px-0">
          Each type of signage has its own unique benefits and ideal
          applications. Businesses can choose based on their branding goals,
          visibility needs, budget, and desired aesthetic.
        </p>
      </section>
    </Wrapper>
  );
};
