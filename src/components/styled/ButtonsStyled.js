import styled from "styled-components";

export const NewQuoteButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  padding: 10px 25px;
  border: 3px solid salmon; 
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: salmon;
  &:hover{
    background-color:salmon;
    color:#1d1d1e;
  }
`

export const TwitterButton = styled.a`
  text-decoration: none;
  color: salmon;
  margin-top: 30px;
  font-size: 30px;
  border: 2px solid salmon;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  &:hover{
    transform:translateY(-5px);
    background-color: #333335;
  }
`