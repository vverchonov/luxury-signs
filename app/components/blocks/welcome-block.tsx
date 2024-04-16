import { Wrapper } from "../common/wrapper";

export const WelcomeBlock = () => {
  return (
    <div
      id={"welcome-block"}
      className="flex flex-col top-margin welcome-block w-full text-center items-center"
    >
      <Wrapper>
        <h1 className="text-9xl main-text h1-text font-cor font-semibold">
          CUSTOM SIGNS
        </h1>
        <p className="text-6xl text-white mt-5 font-cor font-semibold secondary-text">
          LUXURY DESIGN SIGNS
        </p>
        <div className="w-full flex flex-row content-center justify-center text-center">
          <a
            href="#calculator-block"
            type="button"
            className="estimate-button mt-20 w-fit gentle-shake font-na font-semibold text-white main-back text-2xl focus:ring-4 focus:outline-none focus:ring-white font-medium px-8 py-4 text-center transform transition duration-500 hover:scale-110"
          >
            ESTIMATE NOW
          </a>
        </div>
      </Wrapper>
    </div>
  );
};
