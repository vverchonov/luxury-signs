import { WeOfferItem } from "./we-offer-item";
import { Wrapper } from "../../common/wrapper";

export const WeOfferBlock = () => {
  return (
    <Wrapper>
      <section
        id={"products-block"}
        className="w-full p-4 md:ps-48 md:pe-48 md:pb-24 md:pt-20"
      >
        <div className="flex w-full flex-col">
          <h2 className="ms-auto text-8xl grey-text mb-4 md:mb-12 font-na font-bold">
            WE OFFER
          </h2>
        </div>
        <div className="flex-container flex w-full flex-wrap gap-10">
          <WeOfferItem />
          <WeOfferItem />
          <WeOfferItem />
          <WeOfferItem />
          <WeOfferItem />
          <WeOfferItem />
          <WeOfferItem />
          <WeOfferItem />
        </div>
      </section>
    </Wrapper>
  );
};
