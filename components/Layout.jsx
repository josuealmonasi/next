import styles from '../styles/Layout.module.css';
import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
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
