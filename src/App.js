import React, { Component } from 'react';
import './App.css';
import KeyPad from "./components/KeyPad";
import Output from './components/Output';

export default class App extends Component {
  state = {
    result: ''
  };

  buttonPressed = buttonName => {
    if (buttonName === '=') {
      this.calculate();
    } else if (buttonName === 'C') {
      this.reset();
    } else 
    this.setState({
      result: this.state.result + buttonName
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result || "")
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  }

  render() {
    return (
      <div className="App">
        <div className="keypad">
          <Output result={this.state.result} />
          <KeyPad buttonPressed={this.buttonPressed} />
        </div>


      </div>
    );
  };

}
