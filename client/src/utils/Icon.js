// icon.js
import React from 'react';
import IcoMoon from 'react-icomoon';
const iconSet = require('../static/icons/selection.json');

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

Icon.defaultProps = {
  size: 20,
};

export default Icon;
