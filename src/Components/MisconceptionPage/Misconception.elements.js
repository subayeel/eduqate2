import styled from "styled-components";

export const DrawerContainer = styled.div`
  
  width: 200px;
  
`;
export const StyledDrawer = styled.div`
  background-color: ${(props) => props.bgcolor};
  width: 100%;
  transition: 0.5s;
`;

export const DrawerButton = styled.button`
  width: 600px;
  border: none;
  text-align: start;
  cursor: pointer;
  padding: 7px 10px 7px 10px;
  margin: 0 10px 0 10px;
  border-top: ${props=>props.first?"1px solid grey":""};
  border-bottom: 1px solid grey;

  &:hover{
    background-color: white;
  }
`;
export const DrawerContent = styled.div`
  display: ${(props) => props.display};
  height:${props=>props.height};
  width: 600px;
  margin: 0 10px 0 10px;
  padding: 0 10px 0 10px;

  overflow-y: scroll;   
  
  
  transition:.25s ease-in-out; 
`;
