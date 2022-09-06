import styled from "styled-components";
import img from '../../Images/star-bg.png';

export const BrowseSectionContainer = styled.div`
width: 100%;


`
export const BrowseSectionWrapper = styled.div`
padding: 50px 0 0 0;

display: block;
margin-left: auto;
margin-right: auto;

`



export const Heading = styled.h2`
    font-size: 32px;
    line-height: 1.125;
    font-weight: 600;
    letter-spacing: .004em;
    text-align: center;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    
color:${(props)=>(props.dark? '#1d1d1f':'white')} ;
`


export const BrowseHero = styled.div`
width: 100%;
height: 95vh;
/* background-image: url(${img}); */
background: #2c2c2c;

`
export const BrowseHeroWrapper = styled.div`
padding: 0 24px;
display: flex;

`




export const HorizontalScrollable = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin: 0 0 0 24px;
  width: ${(props) => props.width};
  > div {
    display: inline-block;
    margin: 0;
  }
`;