import React, { useState, useEffect } from "react";
import ConceptCardLarge from "../ConceptCardLarge/ConceptCardLarge";
import ConceptCardSmall from "../ConceptCardSmall/ConceptCardSmall";
import ConceptCard from "../ConceptCard/ConceptCard";
import {
  BrowseSectionContainer,
  BrowseSectionWrapper,
 Heading,BrowseHero,BrowseHeroWrapper,
  
  
  HorizontalScrollable,
} from "./BrowseSection.elements";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import BrowseCard from "../BrowseCard/BrowseCard";

const BrowseSection = () => {
  const [info, setInfo] = useState([]);
  const {category} = useParams();
  const collectionRef = collection(db, category);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);

      setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  
  return (
    <>
      <BrowseSectionContainer>
        <BrowseSectionWrapper>
        
          
              {/* {info
                .slice(0,1)
                .map((filteredInf) => {
                  return <ConceptCardLarge  {...filteredInf} />;
                })}
            
              
              {info.slice(0,4).map((inf) => {
                return <ConceptCardSmall {...inf} />;
              })}
             */}
             <BrowseHero>
              <BrowseHeroWrapper>
                <Heading> Misconception about ...</Heading> 
              </BrowseHeroWrapper>
             </BrowseHero>
          

         <Heading dark>View Recent Uploads</Heading>
          <HorizontalScrollable>
            {info.map((inf) => {
                return <BrowseCard  {...inf} />;
              })}
          </HorizontalScrollable>
          
          
        </BrowseSectionWrapper>
      </BrowseSectionContainer>
    </>
  );
};

export default BrowseSection;
