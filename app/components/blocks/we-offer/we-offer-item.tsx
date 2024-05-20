export const WeOfferItem = (props: any) => {
  return (
    <div className="flex flex-col  gap-4 offer-item relative px-8 md:px-0">
      <img alt={props.imgAlt} className="offer-img" src={props.image} />
      <div className="flex flex-col p-2">
        <h3 className="text-2xl md:text-4xl  font-na font-bold uppercase mt-2 mb-2 text-left">
          {props.name}
        </h3>
        <p className="font-na text-lg md:text-xl ">{props.text}</p>
      </div>
      <a
        href="#calculator-block"
        type="button"
        className="estim-button m-2 mt-auto text-white dark-back w-fit font-na font-semibold text-xl uppercase focus:ring-4 focus:outline-none focus:ring-white font-medium px-3 py-4 text-center transform transition duration-500 hover:scale-110"
      >
        Get Estimate
      </a>
    </div>
  );
};
