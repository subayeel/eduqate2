import React from "react";
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
import {conceptObj1} from '../../Data/conceptCardData'
const BrowseSection = ({heroCard,heroSmallCard,mainCard}) => {
  return (
    <>
      <BrowseSectionContainer>
        <BrowseSectionWrapper>
          
            <Row>
              <Column1>
                <ConceptCardLarge {...heroCard}/>
              </Column1>
              <Column2>
              {/* add filter and limit no. of children */}
                <ConceptCardSmall {...heroSmallCard}/>
                <ConceptCardSmall {...heroSmallCard}/>
                <ConceptCardSmall {...heroSmallCard}/>
                <ConceptCardSmall {...heroSmallCard}/>
                <ConceptCardSmall {...heroSmallCard}/>
                
              </Column2>
            </Row>
          
          <MainSection>
            <Row>
              <Column1>
              {/* add pagination to limit the rendering of children */}
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
                <ConceptCard {...mainCard}/>
              </Column1>
              <Column2></Column2>
            </Row>
          </MainSection>
        </BrowseSectionWrapper>
      </BrowseSectionContainer>
    </>
  );
};

export default BrowseSection;
