export const WelcomeBlock = () => {
  return (
    <div className="flex flex-col top-margin welcome-block w-full text-center">
      <h1 className="text-9xl main-text h1-text">CUSTOM SIGNS</h1>
      <p className="text-6xl text-white mt-5">LUXURY DESIGN SIGNS</p>
      <div className="w-full flex flex-row content-center justify-center text-center">
        <button
          type="button"
          className="mt-20 w-fit text-white main-back text-2xl focus:ring-4 focus:outline-none focus:ring-white font-medium px-4 py-2 text-center transform transition duration-500 hover:scale-110"
        >
          ESTIMATE NOW
        </button>
      </div>
    </div>
  );
};
