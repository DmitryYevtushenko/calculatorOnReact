import React, { Component } from 'react';

export default class Output extends Component {
  render() {
    return (
      <div className="output">
        <div>
           <p>
             {this.props.result}
           </p>
         </div>
      </div>
    );
  };

}

