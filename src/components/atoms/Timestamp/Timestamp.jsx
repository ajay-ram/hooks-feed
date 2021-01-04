import React      from 'react';

require('./Style.css');

const Timestamp = props => (
  <div>
      <span className="text-muted">{props.timeStamp}</span>
  </div>
  
);

export default Timestamp;
