import React from 'react';

export default function Output(props) {
  return (
    <div className="Output">
      <div>
         <p>
           {props.result}
         </p>
       </div>
    </div>
  );
}

