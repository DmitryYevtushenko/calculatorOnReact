import React, { Component } from 'react';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';
import './App.css';
import KeyPad from "./components/KeyPad";
import Output from './components/Output';

export default class App extends Component {
  state = {
    result: ""
  };

  buttonPressed = buttonName => {
    if (buttonName === '=') {
      this.calculate();
    } else if (buttonName === 'C') {
      this.reset();
    } else if (buttonName === 'save') {
      this.saveToFile();
    } else {
      this.setState({
        result: this.state.result + buttonName
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
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
    });
  };
  
  saveToFile = () => {
    const dataURI = "data:text/plain;base64," + encodeBase64(this.state.result.toString());
    saveAs(dataURI, "result.txt");
  };

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
