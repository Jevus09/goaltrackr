import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { fetchFixtures } from './lib/FetchData';
import { data } from './lib/DummyData';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fixture from './components/Fixture';
import League from './components/League';
import Footer from './components/Footer';

function App() {

  const [fixtures, setFixtures] = useState(data)

  const fetchInfo = async () => {
    const data = await fetchFixtures();
    setFixtures(data)
  }

  useEffect(() => {
    fetchInfo()
  }, []);

  const refresh = () => window.location.reload(true)

    console.log(fixtures);
  return (
    <div className='bg-white w-full md:w-[700px] lg:w-[800px] m-auto ' >

    <BrowserRouter>
    <Navbar onClick={refresh} />
    <button className='btn btn-sm fixed bottom-3 right-2 z40' onClick={refresh} >Refresh</button>
    {!fixtures ? (<div className='flex h-screen items-start justify-center mt-10 p-10' ><progress className="progress w-56"></progress> </div>) : (  

      <Routes>
        <Route path="/" element={<Table data={fixtures} />} />
        <Route path="/fixtures/:matchId" element={<Fixture data={fixtures} />} />
        <Route path="/league/:id" element={<League />} />
      </Routes>

    )}
      
    </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
