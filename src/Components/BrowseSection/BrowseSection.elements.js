import styled from "styled-components";

export const BrowseSectionContainer = styled.div`
width: 100%;


`
export const BrowseSectionWrapper = styled.div`
padding: 60px 0 0 0;
max-width: 1300px;
justify-content: center;
margin-left: auto;
margin-right: auto;

`
export const HeroSection = styled.div`
height: 80vh;
width: 100%;
color: #2c2c2c;
`

export const Row = styled.div`
display: grid;

@media screen and (max-width:768px){
    grid-template-columns: repeat(1,1fr);
}
@media screen and (min-width:768px){
    grid-template-columns: repeat(2,1fr);
}
`

export const Column1 = styled.div` 
padding: 0 14px;

`

export const Column2 = styled.div`
padding: 0 14px;
@media screen and (max-width:768px){
    display: none;
}
`

export const MainSection = styled.div`
padding-top: 40px;
`