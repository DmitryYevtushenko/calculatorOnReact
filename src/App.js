import React from 'react';
// import logo from './logo.svg';
import './App.css';
import KeyPad from "./components/KeyPad";
import Output from './components/Output';

function App() {
  let state = {
    result: ''
  }

  let buttonPressed = buttonName => {
    this.setState({
      result: buttonName
    });
  };

  return (
    <div className="App">
      <Output result={state.result} />
      <KeyPad buttonPressed={buttonPressed}/>

    </div>
  );
}

export default App;
