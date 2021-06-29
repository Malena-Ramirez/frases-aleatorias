import React, { Component } from "react";
import { QuoteIcon, QuoteText, QuoteAuthor } from "./styled/QuoteContainerStyled";

export default class QuoteContainer extends Component {
  render() {
    return (
      <>
        <QuoteIcon color={this.props.color} className="ri-double-quotes-l" />
        <QuoteText id="text">{this.props.quote.quote}</QuoteText>
        <QuoteAuthor id="author">{this.props.quote.author}</QuoteAuthor>
      </>
    );
  }
}
