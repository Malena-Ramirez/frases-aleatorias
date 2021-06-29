import styled from "styled-components";

export const QuoteIcon = styled.i`
  font-size: 60px;
  color:  ${props => props.color};
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`

export const QuoteText = styled.p`
  font-size: 25px;
  color: beige;
  @media (min-width: 768px) {
    font-size: 30px;  
  }
`

export const QuoteAuthor = styled.p`
  font-size: 20px;
  color: beige;
  margin-top:0;
  margin-bottom:25px;
  &:after{
    content:" -";
    color: gray;
  }
  &:before{
    content:"- ";
    color: gray;
  }
  @media (min-width: 768px) {
    margin-top:5px;
    margin-bottom:35px; 
  }
`