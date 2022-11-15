import React from 'react';
import FeatureProducts from './components/FeatureProduct.js';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
    const data = {
        name: "My Store"
    };
  return (
    <>
    <HeroSection  myData={data}/>
    <FeatureProducts />
    <Services />
    <Trusted />
    </>
  )
}
export default Home;