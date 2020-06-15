import React from 'react';
import PropTypes from 'prop-types';

const Block = ({ title, children }) => {
  return (
    <div className="block">
      <div className="block-header">
        <h3>{title}</h3>
      </div>
      <div className="block-container row">{children}</div>
    </div>
  );
};

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Block;
