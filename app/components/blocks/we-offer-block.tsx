import { WeOfferItem } from "../we-offer-item";
import { Wrapper } from "../wrapper";

export const WeOfferBlock = () => {
  return (
    <Wrapper>
      <section className="w-full ps-48 pe-48 pb-24 pt-20">
        <div className="flex w-full flex-col">
          <h2 className="ms-auto text-140xl grey-text mb-12 font-na font-bold">
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
