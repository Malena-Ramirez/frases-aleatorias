import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: 'Akaya Kanadaka', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    position: fixed;
    text-align: center;
    background-color: #1d1d1e; 
  }
`;

export const AppStyled = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 15px solid salmon;
  margin: 0 20px; 
  padding: 20px 10px;
  @media (min-width: 768px) {
    width: 50vw;
    height: 50vh;
    border: 30px solid salmon; 
    padding: 50px;
  }
`