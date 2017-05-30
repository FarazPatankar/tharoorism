import React, { Component } from 'react';
import './App.css';
import quotes from './quotes'

class App extends Component {
  constructor() {
    super();
    this.state={quote: "Click to get a fresh dose of Tharoorism, human!"};
    this.handleClick = this.handleClick.bind(this);
    this.lastQuote = -1;
  }

  handleClick() {
    let quoteNumber = this.generateQuoteNumber();
    while(quoteNumber === this.state.lastQuote) {
      quoteNumber = this.generateQuoteNumber();
    }

    this.setState({
      quote: quotes[quoteNumber]
    })
  }

  generateQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>{this.state.quote}</h1>
          <a href="#" className="button" onClick={this.handleClick}>Give Me My Dose Of Tharoorism!</a>
        </div>
      </div>
    );
  }
}

export default App;
