import PropTypes from 'prop-types';
import React from 'react';

const Input = (props) => {
  return (
    <div className="form-input">
      <label>
        {props.label}
        <input
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};
Input.defaultProps = {
  label: '',
  placeholder: '',
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
