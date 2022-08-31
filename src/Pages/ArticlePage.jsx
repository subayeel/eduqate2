import React from "react";
import Article from "../Components/ArticleComponent/Article";


import { conceptObj1 } from "../Data/conceptCardData";

const ArticlePage = () => {
  return (
    <>
      <Article {...conceptObj1} />
    </>
  );
};

export default ArticlePage;
