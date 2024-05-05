import Image from "next/image";
import { Wrapper } from "../common/wrapper";

export const AboutUsBlock = () => {
  return (
    <Wrapper>
      <section
        id={"about-block"}
        className="light-back w-full m-h-screen flex flex-wrap"
      >
        <div className="md:w-1/2 p-2 md:p-24 px-8">
          <p className="grey-text font-na text-5xl md:text-8xl text-left md:mt-0 mt-4 md:text-right mb-8 font-bold md:px-8 mt-4 mt-8">
            WHO WE ARE
          </p>
          <p className="grey-text text-lg md:text-xl ms-auto md:w-10/12 w-full font-na text-left md:text-left md:mb-0 mb-8">
            Luxury Designs Signs is a fast-growing sign company, that supports
            your end-to-end sign solution needs across Ontario. We help design,
            manufacture, and install Custom store front signs, Channel letters,
            Lignt boxes, Window decals and more, while providing the best
            service and rates. To find out more, take a look at our website,
            email us or pick up the phone and give us a call! We look forward to
            meeting you.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            fill={true}
            className="w-fill h-auto pos-rel object-cover"
            alt="text"
            src={"/assets/png/picture-1.png"}
          />
        </div>
        <div className="w-full hidden md:block md:w-1/2 content-right">
          <Image
            fill={true}
            className="w-fill h-auto pos-rel object-cover"
            alt="text"
            src={"/assets/png/picture-2.png"}
          />
        </div>
        <div className="md:w-1/2 p-2 md:p-24">
          <p className="grey-text font-na text-5xl md:text-8xl text-left mb-8 font-bold px-8 mt-8">
            WHY to INVEST IN SIGNAGE
          </p>
          <p className="grey-text text-lg md:text-xl p-2 font-na text-left md:w-10/12 w-full md:text-right px-8 md:px-0 md:mb-0 mb-8">
            Signage is essential for businesses as it communicates brand
            identity, attracts customers, and promotes products or services
            effectively. From storefront signs to promotional banners, signage
            plays a crucial role in enhancing visibility, guiding customers, and
            reinforcing brand recognition, ultimately contributing to business
            success.
          </p>
        </div>
        <div className="w-full block md:hidden md:w-1/2 content-right">
          <Image
            fill={true}
            className="w-fill h-auto pos-rel"
            alt="text"
            src={"/assets/png/picture-2.png"}
          />
        </div>
      </section>
    </Wrapper>
  );
};
