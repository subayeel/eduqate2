import styled from "styled-components";

export const AddArticleContainer = styled.div`
max-width: 1300px;
padding-top: 40px;
` 

export const AddArticleWrapper = styled.div`
display:flex;
padding: 40px 0;
`
export const TextfieldWrapper = styled.div`
height: 36px;
width: 800px;
display: block
;
width: 100%;
margin: 14px;
align-items: center;
justify-content: center;

@media screen and (max-width:768px){
    height: 42px;
    width: 400px;
}
`
export const TextField = styled.input`
border: 1px solid teal;
outline: none;

::placeholder{
    font-size: 14px;
    letter-spacing: 1px;
    color: #2c2c2c;
}
height: 32px;
`

export const TextAreaWrapper = styled.div`
height: 36px;
width: 400px;
height:200px;
display: flex;
align-items: center;
justify-content: center;
;

@media screen and (max-width:768px){
    height: 42px;
    width: 400px;
}
`

export const TextArea = styled.textarea`

outline: none;
width: 100%;
height:100%


`

