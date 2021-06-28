import styled from "styled-components";

export const QuoteIcon = styled.i`
  font-size: 60px;
  color: salmon;
`

export const QuoteText = styled.p`
  font-size: 30px;
  color: beige;
`

export const QuoteAuthor = styled.p`
  font-size: 20px;
  color: beige;
  &:after{
    content:" -";
    color: gray;
  }
  &:before{
    content:"- ";
    color: gray;
  }
  
`