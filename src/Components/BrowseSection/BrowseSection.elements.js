import styled from "styled-components";



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
    text-align: ${(props)=>(props.align)};
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    
color:${(props)=>(props.dark? '#1d1d1f':'white')} ;
`

export const Heading2 = styled.h3`
    font-size: 24px;
    line-height: 0.8;
    font-weight: 500;
    letter-spacing: .003em;
    text-align: ${(props)=>(props.align)};
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    
color:${(props)=>(props.dark? '#1d1d1f':'white')} ;
`

export const BrowseHeroContainer = styled.div`
width: 100%;
min-height: 95vh;
height: auto;
background-color: #1c1d1f;




`
export const BgOverlay = styled.div`
background:linear-gradient(to right,rgba(0, 0, 0, 0  ),rgba(0, 0, 0, 0.85)) ; 
  

  @media screen and (max-width:786px){
    background:linear-gradient(to bottom,rgba(0, 0, 0, 0  ),rgba(0, 0, 0, 0.85)) ; 
  }
`
export const BrowseHeroWrapper = styled.div`
height: 100%;
max-width: 1140px;
margin-left: auto;
margin-right: auto;

`


export const HScrollContainer = styled.div`
max-width: 1168px;
margin-left: auto;
margin-right:auto;
`

export const HScrollWrapper = styled.div`
  overflow: auto;
  white-space: nowrap;
  
  > div {
    display: inline-block;
    margin: 0;
  }
`;

export const Row = styled.div`
display: flex;
grid-template-columns: 1fr 1fr;
@media screen and (max-width:786px){
  flex-direction: column;
}
`
export const Column = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
`
export const Column2 = styled.div`
display: flex;
height: 95vh;

align-items: center;
@media screen and (max-width:786px){
  height: 50vh;
}

  
  
`

export const ImgWrap = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
padding-right: 14px;

`
export const Img = styled.img`
width: 400px;
border-radius: 7px;

object-fit: cover;
@media screen and (max-width:900px){
  width: 250px;
}
@media screen and (max-width:786px){
  /* width: 150px; */
}
`
export const TextWrap = styled.div`
padding: 0px;
`
export const Desc = styled.p`
font-size:16px;
letter-spacing: 0.1rem;
line-height: 18px;
color: white;
`

