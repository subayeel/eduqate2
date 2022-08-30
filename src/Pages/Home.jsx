import React, { useState } from "react";
import InfoSection from "../Components/InfoSection/InfoSection";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideBar/Sidebar";
import Hero from "../Components/Hero/Hero";
import Footer from '../Components/Footer/Footer'
import {
  quranSection,
  prophetSection,
  currentAffairsSection,
} from "../Data/infoSectionData";
import ConceptCard from "../Components/ConceptCard/ConceptCard";
import { conceptObj1 } from "../Data/conceptCardData";
import ConceptCardSmall from "../Components/ConceptCardSmall/ConceptCardSmall";

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
