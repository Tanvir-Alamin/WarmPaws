import React from "react";
import HeroSlider from "../Components/HeroSlider";
import Hero from "../Components/Hero";
import Tips from "../Components/Tips";
import Vets from "../Components/Vets";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HeroSlider></HeroSlider>
      <Tips></Tips>
      <Vets></Vets>
    </div>
  );
};

export default Home;
