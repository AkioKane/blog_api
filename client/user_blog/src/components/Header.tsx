import styles from "./Header.module.css";

interface HeaderHomeProps {}

const Header: React.FC = () => {
  return (
    <>

    </>
  );
};

const HeaderHome: React.FC<HeaderHomeProps> = () => {
  return (
    <>
      <div className={styles.headerHomeContainer}>
        <div className={styles.logo}>
          <h1>Blog API</h1>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.elementNav}></div>
          <div className={styles.elementNav}></div>
          <div className={styles.elementNav}></div>
        </nav>

        <div className={styles.loginContainer}></div>
      </div>
    </>
  );
};

export { HeaderHome };
export default Header;