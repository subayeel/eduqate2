import styled from "styled-components";

export const StyledDrawer = styled.div`
  background-color: ${(props) => props.bgcolor};
  transition: 0.5s;
  align-items: center;
  margin-top: 7px;
`;

export const DrawerButton = styled.button`
  width: 500px;
  border: none;
  display: flex;
  text-align: start;
  border-radius: ${(props) => props.radius};
  cursor: pointer;
  padding: 7px 10px 7px 10px;
  transition: 0.2s;
  border-bottom: 1px solid grey;

  &:hover {
    background-color: white;
  }
  @media screen and (max-width: 586px) {
    width: 300px;
  }
`;

export const DrawerQuestion = styled.p`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  text-align: start;
  letter-spacing: 0.01rem;
`;

export const DrawerContent = styled.div`
  display: ${(props) => props.display};
  height: ${(props) => props.height};
  width: 500px;
  border: none;
  background-color: white;
  color: #2c2c2c;
  overflow: hidden;
  border-radius: 0 0 7px 7px;
  transition: 0.25s ease-in-out;
  @media screen and (max-width: 586px) {
    width: 300px;
  }
`;

export const TextWrap = styled.div`
  padding: 7px 14px;
`;
