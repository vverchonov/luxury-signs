export const WeOfferItem = () => {
  return (
    <div className="flex flex-col gap-2 w-32 offer-item">
      <img
        className="offer-img"
        src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg"
      />
      <h3 className="text-2xl text-bold">Channel letters</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button
        type="button"
        className="text-white dark-back w-fit focus:ring-4 focus:outline-none focus:ring-white font-medium px-4 py-2 text-center transform transition duration-500 hover:scale-110"
      >
        ESTIMATE NOW
      </button>
    </div>
  );
};
