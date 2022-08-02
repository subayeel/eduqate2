import React from "react";
import scholars from "../../Data/scholar";
import { HorizontalScrollable,Section, TextStyle } from "../Global";
import ScholarCard from "../ScholarCard/ScholarCard";

function ScholarPage() {
  function createScholarCard(details) {
    return <ScholarCard name={details.name}></ScholarCard>;
  }
  return (
    <Section height="100vh">
    <TextStyle align="center" size="1.2em">Online Islamic Content</TextStyle>
      <HorizontalScrollable>
        {scholars.map(createScholarCard)}
      </HorizontalScrollable>
    </Section>
  );
}

export default ScholarPage;
