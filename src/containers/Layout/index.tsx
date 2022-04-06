import Header from '../Header';

import { FC } from "react"

import styles from './layout.module.scss';

const Layout:FC = ({ children }) => {
  return(
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;