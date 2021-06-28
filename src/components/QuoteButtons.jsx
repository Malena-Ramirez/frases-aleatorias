import React, { Component } from "react";
import { NewQuoteButton } from "./styled/ButtonsStyled";

export default class QuoteButtons extends Component {
  render() {
    return (
      <>
        <NewQuoteButton id="new-quote" type="button">
          Nueva Cita
        </NewQuoteButton>
        <div>
          <a href="http:/twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote">
            <i className="ri-twitter-fill"></i>
          </a>
        </div>
      </>
    );
  }
}
