import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import {
  FlexContainer,
  FlexItem,
  Section,
  
  TextStyle,
} from "../Global";
import  Drawer  from './Drawer';

function Misconception(props) {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);

  return (
    <Section padding="10px" color="#EEEEEE" height="100vh">
      <TextStyle margin="10px" size="1.2em" weight="600" align="center">
        Misconception
      </TextStyle>
      <FlexContainer>
        <FlexItem flex="1">
          <TextStyle weight="500" margin="30px 0 30px 0">Related Topics</TextStyle>

          
        </FlexItem>
        <FlexItem flex="1">
          <TextStyle weight="500" margin="30px 0 30px 0">FAQ by Non-Muslims</TextStyle>
          <Drawer first state={state1} setState={setState1}/>
          <Drawer state={state2} setState={setState2}/>
          <Drawer state={state3} setState={setState3}/>
          <Drawer state={state4} setState={setState4}/>

          <TextStyle weight="500" margin="30px 0 30px 0">FAQ by Non-Muslims</TextStyle>
          <Drawer first state={state1} setState={setState1}/>
          <Drawer state={state2} setState={setState2}/>
          <Drawer state={state3} setState={setState3}/>
          <Drawer state={state4} setState={setState4}/>

        </FlexItem>
      </FlexContainer>
    </Section>
  );
}

export default Misconception;
