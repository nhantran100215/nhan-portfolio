import React from 'react';
import './loading.scss';

const Loading = () => {
  return (
    <div className="loading prevent-select">
      <div className="ring">
        Loading
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
