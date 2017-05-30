import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import quotes from './quotes'

class App extends Component {
  constructor() {
    super();
    this.state={quote: "Click the button for a quote, human!"};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>{this.state.quote}</h1>
          <a href="#" className="button" onClick={this.handleClick}>Click To Generate Random Quote</a>
        </div>
      </div>
    );
  }
}

export default App;
