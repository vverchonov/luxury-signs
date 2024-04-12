import { Calculator } from "../calculator/calculator";

export const CalculatorBlock = () => {
  return (
    <section className="w-full min-h-screen dark-back p-24">
      <div className="flex w-full flex-col">
        <h2 className="text-9xl text-white mb-12">GET QUOTE NOW</h2>
        <Calculator />
      </div>
    </section>
  );
};
