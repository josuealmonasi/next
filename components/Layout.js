import React from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
