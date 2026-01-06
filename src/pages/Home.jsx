import React from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Catalog from "../components/Catalog/Catalog";
import WhyNorLight from "../components/WhyNorLight/WhyNorLight";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import TrustedBrands from "../components/TrustedBrands/TrustedBrands";
import Blog from "../components/Blog/Blog";
import Production from "../components/Production/Production";
import HomeSections from "../components/HomeSections";

function Home() {
  return (
    <>
      <HeroSlider />
      <Catalog />
      <WhyNorLight />
      <PopularProducts />
      <HomeSections />
      <Production />
    </>
  );
}

export default Home;
