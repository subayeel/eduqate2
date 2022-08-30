import React from "react";
import BrowseSection from "../Components/BrowseSection/BrowseSection";

const BrowsePage = (props) => {
 
  return (
    <>
    
      <BrowseSection {...props.data} />
    </>
  );
};

export default BrowsePage;
