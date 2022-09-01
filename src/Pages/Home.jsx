import React, { useState } from "react";
import InfoSection from "../Components/InfoSection/InfoSection";

import Hero from "../Components/Hero/Hero";
import Footer from '../Components/Footer/Footer'
import {
  quranSection,
  prophetSection,
  currentAffairsSection,
} from "../Data/infoSectionData";


const Home = () => {
  
  return (
    <>
      
      <Hero />

      <InfoSection {...quranSection} />
      <InfoSection {...prophetSection} />
      <InfoSection {...currentAffairsSection} />
      <Footer/>
     </>
  );
};

export default Home;
