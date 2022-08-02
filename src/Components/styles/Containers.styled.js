import styled from "styled-components";



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


