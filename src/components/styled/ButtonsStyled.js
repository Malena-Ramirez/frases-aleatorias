import styled from "styled-components";

export const NewQuoteButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  padding: 10px 25px;
  border: 3px solid ${props => props.color}; 
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.color};
  &:hover{
    background-color:${props => props.color};
    color:#1d1d1e;
  }
`

export const TwitterButton = styled.a`
  text-decoration: none;
  color: ${props => props.color};
  margin-top: 30px;
  font-size: 30px;
  border: 2px solid ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  &:hover{
    transform:translateY(-5px);
    background-color: #333335;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`