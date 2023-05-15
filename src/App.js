import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { fetchFixtures } from './lib/FetchData';
import { data } from './lib/DummyData';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fixture from './components/Fixture';

function App() {

  // const fetchData = async () => {
  //   const fixtures = await fetchFixtures()
  //   console.log(fixtures); 
  // }

  // useEffect(() => {
  //   fetchData()
  // })

    console.log(data);
  return (
    <div className=' bg-white w-full md:w-[700px] lg:w-[800px] m-auto' >

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Table data={data} />} />
        <Route path="/fixtures/:matchId" element={<Fixture data={data} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
