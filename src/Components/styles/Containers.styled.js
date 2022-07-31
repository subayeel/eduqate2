import styled from "styled-components";

export const StyledContainer = styled.div`
  display: block;
  padding: ${(props) => props.padding};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: auto;
  
  background-color: ${(props) => props.bgcolor};
  color:${props=>props.color}

`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props=>props.direction};
`;
export const FlexItem = styled.div`
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
`;

export const GridContainer = styled.div`
  display: grid;
  position: relative;
`;

export const GridItem = styled.div`
  grid-column-start: ${(props) => props.colstart};
  grid-column-end: ${(props) => props.colend};
  grid-row-start: ${(props) => props.rowstart};
  grid-row-end: ${(props) => props.rowend};
  background-color: ${(props) =>
    props.bgcolor ? ({ theme }) => theme.colors.primarybg : ""};
`;

export const ImageContainer = styled.div`
  width: ${(props) => props.width};
  
  position: relative;

  > img {
    display: block;
    margin: auto;
    width: 80%;
  }
`;



