import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../utils/Icon';

const Button = (props) => {
  return (
    <button
      className={`button ${props.class}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.icon ? <Icon icon={props.icon} className="button-icon" /> : ''}
      {props.label}
    </button>
  );
};

Button.propTypes = {
  class: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

Button.defaultProps = {
  class: 'secondary',
  type: 'button',
};

export default Button;

// onClick={() => send()} type="submit"
