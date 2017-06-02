import React, { Component } from 'react';
import './App.css';
import quotes from './quotes'
import Typist from 'react-typist';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-100343895-1')

function fireTracking() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}


class App extends Component {
  constructor() {
    super();
    this.state={
      quote: "",
      lastQuote: -1,
      isTypingDone: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fireTracking();
  }

  handleClick() {
    let quoteNumber = this.generateQuoteNumber();
    while(quoteNumber === this.state.lastQuote) {
      quoteNumber = this.generateQuoteNumber();
    }

    this.setState({
      quote: quotes[quoteNumber],
      lastQuote: quoteNumber
    })
  }

  generateQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
  }

  typingDone() {
    setTimeout(() => {
      if(this.state.isTypingDone === false) {
        this.setState({
          isTypingDone: true
        })
      }
    }, 2000)
  }

  render() {
    const typingDone = this.state.isTypingDone;
    let element = null;

    if (!typingDone) {
      element = <Typist
                  className="typist-text"
                  avgTypingDelay={80}
                  startDelay={1500}
                  cursor={{hideWhenDone: true}}
                  onTypingDone={this.typingDone.bind(this)}
                >
                  Welcome to Tharoorism, Mortal!
                </Typist>
    } else {
      element = <div className="App-header">
                  <h1>{this.state.quote}</h1>
                  <a href="#" className="button" onClick={this.handleClick}>Give Me My Dose Of Tharoorism!</a>
                </div>
    }

    return (
      <div className="App">
        {element}
      </div>
    );
  }
}

export default App;
