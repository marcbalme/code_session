import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../utils/Icon';
import { ICON_ClOSE } from '../../constants';

const SlidePanel = ({ title, children, icon, isOpen, setPanelIsOpen }) => {
  return (
    <div className={`slidepanel ${isOpen && 'is-open'}`}>
      <div className="slidepanel-title">
        {icon && <Icon icon={icon} />}
        <h2>{title}</h2>
        <div className="slidepanel-close" onClick={setPanelIsOpen}>
          <Icon icon={ICON_ClOSE} size={30} />
        </div>
      </div>
      <div className="row">{children}</div>
    </div>
  );
};

SlidePanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  icon: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setPanelIsOpen: PropTypes.func.isRequired,
};

export default SlidePanel;
