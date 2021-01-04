import React from 'react';

require('./Styles.css');

const CircularImageView = props => (

    <img 
        style={{
            width: 60,
            height: 60,
            borderRadius: 60 / 2
          }}
        src={props.source} 
        alt="unsupported format" ></img>

);

export default CircularImageView;