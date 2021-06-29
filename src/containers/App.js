import React, { Component } from "react";
import { AppStyled, GlobalStyle } from "../components/styled/AppStyled";
import QuoteContainer from "../components/QuoteContainer";
import QuoteButtons from "../components/QuoteButtons";
import { quotes, backgroundColor } from "../data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0],
      color: backgroundColor[0]
    }
  }

  randomIndex = array => Math.floor(Math.random() * array.length);

  handleClick = () => {
    let quotesIndex = this.randomIndex(quotes);
    let backgroundColorIndex = this.randomIndex(backgroundColor);
    this.setState({ quote: quotes[quotesIndex], color: backgroundColor[backgroundColorIndex] });
  }
  render() {
    return (
      <AppStyled color={this.state.color}>
        <GlobalStyle />
        <QuoteContainer quote={this.state.quote} color={this.state.color} />
        <QuoteButtons onClick={this.handleClick} quote={this.state.quote} color={this.state.color} />
      </AppStyled>
    );
  }
}

export default App;
