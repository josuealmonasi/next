import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Web Dev </span>
        News
      </h1>
      <p className={styles.description}>
        Keep up to date with the latest news...!
      </p>
    </div>
  );
};

export default Header;
