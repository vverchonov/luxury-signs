import { LocationTemplate } from "../components/locationPage/location-template";

const Page = () => {
  return (
    <LocationTemplate
      mainText={"London, Ontario"}
      text={
        "Discover the strategic advantage our bespoke signage solutions offer for businesses in London, Ontario, and its neighboring areas. Nestled amidst the vibrant communities of this region, our studio specializes in crafting custom signage tailored to elevate storefronts and enhance brand visibility. From captivating designs to impeccable craftsmanship, our solutions are designed to amplify your business's presence and drive foot traffic. Explore how our tailored signage can serve as a powerful marketing tool, helping your business stand out and thrive in the competitive landscape of London and its nearby cities."
      }
      src={"./locations/london_map.webp"}
    />
  );
};

export default Page;
