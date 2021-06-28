import React from "react";
import { AppStyled, GlobalStyle } from "../components/styled/AppStyled";
import QuoteContainer from "../components/QuoteContainer";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <QuoteContainer />
      <button id="new-quote" type="button">
        Nueva frase
      </button>
      <div>
        <a href="http:/twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote">
          Icono de twitter
        </a>
      </div>
    </AppStyled>

  );
}

export default App;
