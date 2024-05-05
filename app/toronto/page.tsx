import { LocationTemplate } from "../components/locationPage/location-template";

const Page = () => {
  return (
    <LocationTemplate
      mainText={"Toronto, GTA, Ontario"}
      text={
        "Welcome to our Toronto and GTA location page! Explore the vibrant city of Toronto and its surrounding areas while discovering the innovative signage solutions we offer. At our establishment, we specialize in crafting bespoke, high-quality signage tailored to elevate your storefront's presence. Dive into our portfolio and explore how our tailored signage can serve as a powerful marketing tool, helping your business stand out."
      }
      src={"./locations/toronto_map.webp"}
    />
  );
};

export default Page;
