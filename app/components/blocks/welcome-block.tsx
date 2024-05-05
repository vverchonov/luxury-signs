import { Wrapper } from "../common/wrapper";

export const WelcomeBlock = () => {
  return (
    <div
      id={"welcome-block"}
      className="flex flex-col top-margin welcome-block w-full text-center items-center min-h-screen"
    >
      <Wrapper customClass={"h-full flex flex-col min-h-screen"}>
        <h1 className="hidden md:block text-9xl main-text h1-text font-cor font-semibold">
          CUSTOM SIGNS
        </h1>
        <h1 className="block md:hidden text-9xl main-text h1-text font-cor font-semibold">
          LUXURY DESIGN SIGNS
        </h1>
        <p className="md:block hidden text-6xl text-white mt-5 font-cor font-semibold secondary-text">
          LUXURY DESIGN SIGNS
        </p>
        <div className="w-full flex flex-row content-center mt-auto justify-center text-center">
          <a
            href="#calculator-block"
            type="button"
            className="estimate-button mb-56 w-fit gentle-shake font-na font-semibold text-white main-back text-2xl focus:ring-4 focus:outline-none focus:ring-white font-medium px-8 py-4 text-center transform transition duration-500 hover:scale-110"
          >
            ESTIMATE NOW
          </a>
        </div>
      </Wrapper>
    </div>
  );
};
