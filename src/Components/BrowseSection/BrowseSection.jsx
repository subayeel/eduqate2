import React, { useState, useEffect } from "react";

import {
  BrowseSectionContainer,
  BrowseSectionWrapper,
  Heading,
  HorizontalScrollable,
  TextWrap,
} from "./BrowseSection.elements";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import BrowseCard from "../BrowseCard/BrowseCard";
import Drawer from "../Drawer/Drawer";
import {
  browseQuran,
  browseCurrent,
  browseHadeeth,
} from "../../Data/browseSectionData";
import BrowseHero from "./BrowseHero";

const BrowseSection = () => {
  var heroObject = {};
  const [info, setInfo] = useState([]);

  const { category } = useParams();
  const collectionRef = collection(db, category);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);

      setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, [category]);

  if (category === "q_misconception") {
    heroObject = browseQuran;
  } else if (category === "c_misconception") {
    heroObject = browseCurrent;
  } else if (category === "p_misconception") {
    heroObject = browseHadeeth;
  }

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

          <BrowseHero {...heroObject} />
          <Heading dark align="center">
            View Recent Uploads
          </Heading>
          <HorizontalScrollable>
            {info.map((inf) => {
              return <BrowseCard {...inf} />;
            })}
          </HorizontalScrollable>
        </BrowseSectionWrapper>
      </BrowseSectionContainer>
    </>
  );
};

export default BrowseSection;
