import React,{useState} from "react";
import InfoSection from "../Components/InfoSection/InfoSection";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideBar/Sidebar";
import Hero from "../Components/Hero/Hero";
import { quranSection,prophetSection,currentAffairsSection } from "../Data/infoSectionData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero/>
      <InfoSection {...quranSection}/>
      <InfoSection {...prophetSection}/>
      <InfoSection {...currentAffairsSection}/>
    
    </>
  );
};

export default Home;
