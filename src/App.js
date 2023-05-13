import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { fetchFixtures } from './lib/FetchData';
import { data } from './lib/DummyData';
import Table from './components/table';

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
    < >
    <Navbar/>
    <Table data={data} />
      
    </>
  );
}

export default App;
