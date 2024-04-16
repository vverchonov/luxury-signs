import { Calculator } from "./components/calculator";
import { Wrapper } from "../../common/wrapper";

export const CalculatorBlock = () => {
  return (
    <section
      id={"calculator-block"}
      className="w-full h-screen 2xl:xl:h-fit flex items-center justify-center dark-back p-4 pb-8 pt-8 md:ps-48 md:pe-48 md:pt-24 md:pb-24 calculator-block mx-auto"
    >
      <Wrapper>
        <div className="flex w-full flex-col">
          <Calculator />
        </div>
      </Wrapper>
    </section>
  );
};
