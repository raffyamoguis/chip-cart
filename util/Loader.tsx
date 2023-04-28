import React from 'react';
import loaderStyle from './loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={loaderStyle.wrapper}>
      <div className={loaderStyle.dots}></div>
    </div>
  );
};

export default Loader;
