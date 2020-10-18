
import React, { Component } from 'react';

export default class KeyPad extends Component {
  buttonPressed = e => {
    this.props.buttonPressed(e.target.name);
  };

  render() {
    return (
      <div className="buttons">
        <div>
          <button type="button" name="(" onClick={this.buttonPressed}>(</button>
          <button type="button" name=")" onClick={this.buttonPressed}>)</button>
          <button type="button" name="C" onClick={this.buttonPressed}>C</button>
          <button type="button" name="/" onClick={this.buttonPressed}>/</button>
          <button type="button" name="7" onClick={this.buttonPressed}>7</button>
          <button type="button" name="8" onClick={this.buttonPressed}>8</button>
          <button type="button" name="9" onClick={this.buttonPressed}>9</button>
          <button type="button" name="*" onClick={this.buttonPressed}>*</button>
          <button type="button" name="4" onClick={this.buttonPressed}>4</button>
          <button type="button" name="5" onClick={this.buttonPressed}>5</button>
          <button type="button" name="6" onClick={this.buttonPressed}>6</button>
          <button type="button" name="-" onClick={this.buttonPressed}>-</button>
          <button type="button" name="1" onClick={this.buttonPressed}>1</button>
          <button type="button" name="2" onClick={this.buttonPressed}>2</button>
          <button type="button" name="3" onClick={this.buttonPressed}>3</button>
          <button type="button" name="+" onClick={this.buttonPressed}>+</button>
          <button type="button" name="+/-" onClick={this.buttonPressed}>+/-</button>
          <button type="button" name="0" onClick={this.buttonPressed}>0</button>
          <button type="button" name="." onClick={this.buttonPressed}>.</button>
          <button type="button" name="=" onClick={this.buttonPressed}>=</button>
        </div>
      </div>
    );
  }

}