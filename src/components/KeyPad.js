

// import React, { Component } from 'react';

// export default class KeyPad extends Component {
//   render() {
//     return (
//       <div>
//         <button type="button" name="1">1</button>
//       </div>
//     )
//   }
// }

import React from 'react';

function KeyPad() {
  return (
    <div className="KeyPad">
      <div>
         <button type="button" name="7">7</button>
         <button type="button" name="8">8</button>
         <button type="button" name="9">9</button>
         <button type="button" name="4">4</button>
         <button type="button" name="5">5</button>
         <button type="button" name="6">6</button>
         <button type="button" name="1">1</button>
         <button type="button" name="2">2</button>
         <button type="button" name="3">3</button>
         <button type="button" name="0">0</button>
       </div>
    </div>
  );
}

export default KeyPad;