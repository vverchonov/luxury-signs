import Image from "next/image";
import { Wrapper } from "../wrapper";

export const AboutUsBlock = () => {
  return (
    <Wrapper>
      <section
        id={"about-block"}
        className="light-back w-full m-h-screen flex flex-wrap"
      >
        <div className="md:w-1/2 p-4 md:p-24">
          <p className="grey-text font-na text-8xl text-right mb-8 font-bold">
            WHO WE ARE
          </p>
          <p className="grey-text text-xl font-na text-left md:text-right md:pe-16">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. In publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content.In publishing and graphic design,
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.In publishing and graphic design, Lorem ipsum is
            a placeholder
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            fill={true}
            className="w-fill h-auto pos-rel "
            alt="text"
            src={"/assets/png/picture-1.png"}
          />
        </div>
        <div className="w-full hidden md:block md:w-1/2 content-right">
          <Image
            fill={true}
            className="w-fill h-auto pos-rel "
            alt="text"
            src={"/assets/png/picture-2.png"}
          />
        </div>
        <div className="md:w-1/2 p-4 md:p-24">
          <p className="grey-text font-na text-8xl text-left mb-8 font-bold">
            WHY to INVEST IN SIGNAGE
          </p>
          <p className="grey-text text-xl font-na text-left md:text-right md:pe-16">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. In publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content.In publishing and graphic design,
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.In publishing and graphic design, Lorem ipsum is
            a placeholder
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
