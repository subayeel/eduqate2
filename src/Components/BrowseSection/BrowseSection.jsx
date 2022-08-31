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

const BrowseSection = () => {
  const [info, setInfo] = useState([]);
  const collectionRef = collection(db, "q_misconception");
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
                .filter(async (inf) => await( inf.id) < 1)
                .map((filteredInf) => {
                  return <ConceptCardLarge {...filteredInf} />;
                })}
            </Column1>
            <Column2>
              {/* add filter and limit no. of children */}
              {info.map((inf) => {
                return <ConceptCardSmall {...inf} />;
              })}
            </Column2>
          </Row>

          <MainSection>
            <Column1>
              {/* add pagination to limit the rendering of children */}
              {info.map((inf) => {
                return <ConceptCard {...inf} />;
              })}
            </Column1>
          </MainSection>
        </BrowseSectionWrapper>
      </BrowseSectionContainer>
    </>
  );
};

export default BrowseSection;
