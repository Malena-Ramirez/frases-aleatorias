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
  width: 50vw;
  height: 50vh;
  background-color: transparent;
  border: 40px solid salmon; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`