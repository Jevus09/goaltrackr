import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { fetchFixtures } from './lib/FetchData';
import { data } from './lib/DummyData';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fixture from './components/Fixture';

function App() {

  const [fixtures, setFixtures] = useState(data)

  // const fetchInfo = async () => {
  //   const data = await fetchFixtures();
  //   setFixtures(data);
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

    console.log(fixtures);
  return (
    <div className=' bg-white w-full md:w-[700px] lg:w-[800px] m-auto' >

    <BrowserRouter>
    <Navbar />
    {!fixtures ? (<progress className="progress w-56"></progress>) : (  

      <Routes>
        <Route path="/" element={<Table data={fixtures} />} />
        <Route path="/fixtures/:matchId" element={<Fixture data={fixtures} />} />
      </Routes>

    )}
      
    </BrowserRouter>
    </div>
  );
}

export default App;
