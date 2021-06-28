import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div id="text-Container">
        <div>Aqui va un icono</div>
        <div id="text">Aqui va el texto</div>
      </div>
      <p id="author">Aquí va el autor</p>
      <button id="new-quote" type="button">
        Nueva frase
      </button>
      <div>
        <a href="http:/twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote">
          Icono de twitter
        </a>
      </div>
    </div>
  );
}

export default App;
