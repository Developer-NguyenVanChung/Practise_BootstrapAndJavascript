import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ShowData from './features/ShowData';
import Vaccinated from './features/Vaccinated'
import Age from './features/Age'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:1880/User')
      .then(res => res.json())
      .then(content => setData(content))

  }, [])

  return (
    <>
      <Header />
      <ShowData data={data} />
      <Vaccinated data={data} />
      <Age data={data}/>
    </>
  );
}

export default App;
