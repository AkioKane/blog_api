import Header from '../components/Header';
import { Outlet } from 'react-router';
import './App.module.css';

const App: React.FC = () => {
  return (
    <>
      <div className="main">
        <Header />

        <Outlet context={{  }} />
      </div>
    </>
  );
}

export default App;