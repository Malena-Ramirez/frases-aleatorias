import React from "react";
import { AppStyled, GlobalStyle } from "../components/styled/AppStyled";
import QuoteContainer from "../components/QuoteContainer";
import QuoteButtons from "../components/QuoteButtons";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <QuoteContainer />
      <QuoteButtons />
    </AppStyled>

  );
}

export default App;
