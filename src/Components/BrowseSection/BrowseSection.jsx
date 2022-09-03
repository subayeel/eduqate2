import React, { useState, useEffect } from "react";
import ConceptCardLarge from "../ConceptCardLarge/ConceptCardLarge";
import ConceptCardSmall from "../ConceptCardSmall/ConceptCardSmall";
import ConceptCard from "../ConceptCard/ConceptCard";
import {
  BrowseSectionContainer,
  BrowseSectionWrapper,
  HeroSection,
  Row,
  Column1,
  Column2,
  MainSection,
} from "./BrowseSection.elements";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

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
        
          <Row>
            <Column1>
              {info
                .slice(0,1)
                .map((filteredInf) => {
                  return <ConceptCardLarge  {...filteredInf} />;
                })}
            </Column1>
            <Column2>
              
              {info.slice(0,4).map((inf) => {
                return <ConceptCardSmall {...inf} />;
              })}
            </Column2>
          </Row>

          <MainSection>
            <Column1>
              {/* add pagination to limit the no. of children rendered */}
              {info.map((inf) => {
                return <ConceptCard  {...inf} />;
              })}
            </Column1>
          </MainSection>
        </BrowseSectionWrapper>
      </BrowseSectionContainer>
    </>
  );
};

export default BrowseSection;
