import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <div className="main">
        <Header />

        <Outlet context={{ data }} />
      </div>
    </>
  );
}

export default App;