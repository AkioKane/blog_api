import { Outlet } from 'react-router';
import { useAppContext } from '../context/AppContext';
import styles from './App.module.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { theme } = useAppContext();

  return (
    <>
      <div
        className={`${styles.main} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        <Outlet context={{ theme }} />
      </div>
    </>
  );
}

export default App;