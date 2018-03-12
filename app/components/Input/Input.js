import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <input
      type={props.fieldProps.inputType}
      className={props.fieldProps.className}
      placeholder={props.fieldProps.inputPlaceHolder}
      regex={props.fieldProps.regex}
      value={props.fieldProps.value}
    />
  );
};

export default Input;

Input.propTypes = {
  fieldProps: PropTypes.shape({
    inputType: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    inputPlaceHolder: PropTypes.string,
    regex: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};
