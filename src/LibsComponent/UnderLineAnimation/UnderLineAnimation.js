import React from 'react';
import './underLineAnimation.scss';
const UnderLineAnimation = ({ children, styles, ...rest }) => {
  return (
    <div className="underLine" style={styles} {...rest}>
      {children}
    </div>
  );
};

export default UnderLineAnimation;
