import React from 'react';
import styles from './hamburger.css';

export default ({ children }) => {
  return (
    <div id="menu-toggle">
      <input type="checkbox" />

      <span />
      <span />
      <span />

      <menu id="menu">{children}</menu>
    </div>
  );
};
