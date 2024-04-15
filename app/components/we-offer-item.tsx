export const WeOfferItem = () => {
  return (
    <div className="flex flex-col gap-4 w-32 offer-item">
      <img
        className="offer-img"
        src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg"
      />
      <div className="flex flex-col p-2">
        <h3 className="text-4xl font-na font-bold uppercase mt-2 mb-4">
          Channel letters
        </h3>
        <p className="font-na mb-4 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a
          href="#calculator-block"
          type="button"
          className="text-white dark-back w-fit font-na font-semibold text-xl uppercase focus:ring-4 focus:outline-none focus:ring-white font-medium px-3 py-4 text-center transform transition duration-500 hover:scale-110"
        >
          Estimate now
        </a>
      </div>
    </div>
  );
};
