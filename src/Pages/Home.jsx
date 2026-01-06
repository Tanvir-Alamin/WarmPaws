import React from "react";
import HeroSlider from "../Components/HeroSlider";
import Hero from "../Components/Hero";
import Tips from "../Components/Tips";
import Vets from "../Components/Vets";
import Spinner from "../Components/Spinner";

const Home = () => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Hero></Hero>
      <HeroSlider></HeroSlider>
      <Tips></Tips>
      <Vets></Vets>
    </div>
  );
};

export default Home;
