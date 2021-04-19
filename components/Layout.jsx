import styles from '../styles/Layout.module.css';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.conatiner}>
        <div className={styles.main}>
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
