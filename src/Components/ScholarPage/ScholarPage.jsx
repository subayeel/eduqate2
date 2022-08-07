import React from "react";
import scholars from "../../Data/scholar";
import ChannelCard from "../ChannelCard/ChannelCard";
import { HorizontalScrollable, Section, TextStyle } from "../Global";
import ScholarCard from "../ScholarCard/ScholarCard";

function ScholarPage() {
  function createScholarCard(details) {
    return <ScholarCard name={details.name} ytLink={details.ytLink} wLink={details.wLink} desc={details.desc}></ScholarCard>;
  }
  function createChannelCard(details) {
    return <ChannelCard name={details.name} ></ChannelCard>;
  }
  return (
    <>
      <TextStyle weight="500" align="center" size="1.2em">
        Online Islamic Content
      </TextStyle>
      <HorizontalScrollable>
        {scholars.map(createScholarCard)}
      </HorizontalScrollable>
      <TextStyle
        margin="30px 0 30px 20px"
        weight="500"
        align="center"
        size="1.2em"
      >
        Youtube Channels
      </TextStyle>

      <HorizontalScrollable>
        {scholars.map(createChannelCard)}
      </HorizontalScrollable>
    </>
  );
}

export default ScholarPage;