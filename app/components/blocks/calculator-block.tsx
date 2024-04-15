import { Calculator } from "../calculator/calculator";
import { Wrapper } from "../wrapper";

export const CalculatorBlock = () => {
  return (
    <section
      id={"calculator-block"}
      className="w-full min-h-screen flex items-center justify-center dark-back p-4 pb-8 pt-8 md:ps-48 md:pe-48 md:pt-24 md:pb-24 calculator-block mx-auto"
    >
      <Wrapper>
        <div className="flex w-full flex-col">
          <Calculator />
        </div>
      </Wrapper>
    </section>
  );
};
