import Image from "next/image";
import { WelcomeBlock } from "./components/blocks/welcome-block";
import { WeOfferBlock } from "./components/blocks/we-offer-block";
import { CalculatorBlock } from "./components/blocks/calculator-block";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <WelcomeBlock />
      <WeOfferBlock />
      <CalculatorBlock />
    </main>
  );
}
