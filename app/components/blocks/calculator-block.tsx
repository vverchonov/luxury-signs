import { Calculator } from "../calculator/calculator";
import { Wrapper } from "../wrapper";

export const CalculatorBlock = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center dark-back ps-48 pe-48 pt-24 pb-24 calculator-block mx-auto">
      <Wrapper>
        <div className="flex w-full flex-col">
          <Calculator />
        </div>
      </Wrapper>
    </section>
  );
};
