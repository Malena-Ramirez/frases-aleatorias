import React, { Component } from "react";
import { QuoteIcon, QuoteText, QuoteAuthor } from "./styled/QuoteContainerStyled";

export default class QuoteContainer extends Component {
  render() {
    return (
      <>
        <QuoteIcon className="ri-double-quotes-l" />
        <QuoteText id="text">Aqui va el texto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, officia? </QuoteText>
        <QuoteAuthor id="author">Aquí va el autor</QuoteAuthor>
      </>
    );
  }
}
