import styled from "styled-components";

export const StyledDrawer = styled.div`
  background-color: ${(props) => props.bgcolor};
  width: 100%;
  transition: 0.5s;
  align-items: center;
`;

export const DrawerButton = styled.button`
  width: 600px;
  border: none;
  display: block;
  text-align: start;
  cursor: pointer;
  padding: 7px 10px 7px 10px;
  margin: 0 10px 0 10px;
  border-top: ${(props) => (props.first ? "1px solid grey" : "")};
  border-bottom: 1px solid grey;

  &:hover {
    background-color: white;
  }
  @media (max-width: 900px) {
    
    width: 300px;
    padding: 7px 10px 7px 0;
    display: block;
    margin: auto;
  }
`;
export const DrawerContent = styled.div`
  display: ${(props) => props.display};
  height: ${(props) => props.height};
  width: 600px;
  margin: 0 10px 0 10px;
  padding: 0 10px 0 10px;

  overflow-y: scroll;

  transition: 0.25s ease-in-out;

  @media (max-width: 900px) {
    width: 300px;
    padding: 0 5px 0 5px;
    display: block;
    margin: auto;
  }
`;
