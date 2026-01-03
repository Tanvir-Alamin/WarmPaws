import React from "react";
import HeroSlider from "../Components/HeroSlider";
import Hero from "../Components/Hero";
import Tips from "../Components/Tips";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HeroSlider></HeroSlider>
      <Tips></Tips>
    </div>
  );
};

export default Home;
