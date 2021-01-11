import React from 'react';

require('./Styles.css');

const CircularImageView = props => (

    <img 
        style={{
            width: 80,
            height: 80,
            borderRadius: 80 / 2
          }}
        src={props.source} 
        alt="unsupported format" ></img>

);

export default CircularImageView;