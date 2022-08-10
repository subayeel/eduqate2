import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { FlexContainer, FlexItem, Section, TextStyle } from "../Global";
import Drawer from "./Drawer";

function Misconception(props) {
  const [state, setState] = useState(false);

  return (
    <Section padding="10px" color="#EEEEEE">
      <TextStyle margin="10px" size="1.2em" weight="600" align="center">
        Misconception
      </TextStyle>
      <FlexContainer mobileColumn>
        <FlexItem flex="1">
          <TextStyle weight="500" margin="30px 0 30px 0">
            Related Topics
          </TextStyle>
        </FlexItem>
        <FlexItem flex="1">
          <TextStyle weight="500" margin="30px 0 30px 0">
            FAQ by Non-Muslims
          </TextStyle>
          <Drawer first  state={state} setState={setState} />
          <Drawer  state={state} setState={setState} />
          <Drawer  state={state} setState={setState} />
          <Drawer   state={state} setState={setState} />

          <TextStyle weight="500" margin="30px 0 30px 0">
            FAQ by Non-Muslims
          </TextStyle>
          <Drawer first  state={state} setState={setState} />
          <Drawer   state={state} setState={setState} />
          <Drawer state={state} setState={setState} />
          <Drawer  state={state} setState={setState} />
        </FlexItem>
      </FlexContainer>
    </Section>
  );
}

export default Misconception;
