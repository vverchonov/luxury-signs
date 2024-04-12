import { WeOfferItem } from "../we-offer-item";

export const WeOfferBlock = () => {
  return (
    <section className="w-full p-24">
      <div className="flex w-full flex-col">
        <h2 className="ms-auto text-9xl grey-text mb-12">WE OFFER</h2>
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
        <WeOfferItem />
      </div>
    </section>
  );
};
