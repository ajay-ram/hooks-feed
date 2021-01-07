import React from 'react';
import PropTypes  from 'prop-types';

require('./Style.css');

const Input = props => <input {...props} />;

Input.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.string,
};
Input.defaultProps = {
  width: '100%',
  height: '42px',
};

export default Input;
