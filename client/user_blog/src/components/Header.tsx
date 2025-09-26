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
        <div className={styles.logo}></div>

        <div className={styles.navigation}></div>

        <div className={styles.loginContainer}></div>
      </div>
    </>
  );
};

export { HeaderHome };
export default Header;