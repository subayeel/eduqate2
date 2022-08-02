import React from "react";
import {
  FlexContainer,
  StyledContainer,
  FlexItem,
  Avatar,
  TextStyle,
  Button,
} from "../Global";

function ChannelCard(props) {
  return (
    <div>
      <StyledContainer
        shadow
        radius="1px"
        margin="5px 0 5px 10px "
        padding="10px 10px 10px 10px"
        width="500px"
        height="100px"
        color="#007C90"
        bgcolor="#ECEFFF"
      >
        <FlexContainer align="center" justify="center" direction="row">
          <FlexItem flex="20%">
            <Avatar radius="100px">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/subayeel-pic.jpeg?alt=media&token=e0cffe5d-d3bd-4870-b1ce-dbec0026c779"
                alt=""
              />
            </Avatar>
          </FlexItem>
          <FlexItem flex="40%">
            <TextStyle size="1.4em" weight="600" margin="0">
              Channel Name
            </TextStyle>
            <TextStyle size="1.2em" weight="400" margin="0">
              500K Subscribers
            </TextStyle>
          </FlexItem>
          <FlexItem flex="30%">
            <Button margin="0 10px 0 10px" width="150px" primary>
              Subscribe
            </Button>
          </FlexItem>
        </FlexContainer>
      </StyledContainer>
    </div>
  );
}

export default ChannelCard;
