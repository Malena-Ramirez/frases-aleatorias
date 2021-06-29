import React, { Component } from "react";
import { NewQuoteButton, TwitterButton } from "./styled/ButtonsStyled";

export default class QuoteButtons extends Component {
  render() {
    return (
      <>
        <NewQuoteButton color={this.props.color} onClick={this.props.onClick} id="new-quote" type="button">
          Nueva Cita
        </NewQuoteButton>

        <TwitterButton color={this.props.color} href="http:/twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote">
          <i className="ri-twitter-fill"></i>
        </TwitterButton>
      </>
    );
  }
}
