import { WelcomeBlock } from "./components/blocks/welcome-block";
import { WeOfferBlock } from "./components/blocks/we-offer/we-offer-block";
import { CalculatorBlock } from "./components/blocks/calculator/calculator-block";
import { AboutUsBlock } from "./components/blocks/about-block";
import { CarouselBlock } from "./components/blocks/carousel-block/carousel-block";
import { ReviewsBlock } from "./components/blocks/reviews/reviews-block";
import { ModelsBlock } from "./components/blocks/models-block/models-block";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <WelcomeBlock />
      <CarouselBlock />
      <WeOfferBlock />
      <ModelsBlock />
      <AboutUsBlock />
      <ReviewsBlock />
      <CalculatorBlock />
    </main>
  );
}
