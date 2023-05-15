import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Table({ data }) {

  const [selectedLeague, setSelectedLeague] = useState('');
  return (
    
    <div className=' bg-gray-400 grid grid-cols-1 divide-y text-black'>
      <div className='flex-row text-white' >
      <ul className="flex p-4 bg-base-100 justify-evenly">
          <li><button onClick={() => setSelectedLeague('Premier League')}>Premier League</button></li>
          <li><button onClick={() => setSelectedLeague('La Liga')}>La Liga</button></li>
          <li><button onClick={() => setSelectedLeague('Serie A')}> Serie A</button></li>
          <li><button onClick={() => setSelectedLeague('Ligue 1')}>Ligue 1</button></li>
          <li><button onClick={() => setSelectedLeague('Bundesliga')}>Bundesliga</button></li>
          <li><button onClick={() => setSelectedLeague('Champions League')}>Champions League</button></li>
        </ul>
      </div>
      {data.response
  .filter((fixture) => selectedLeague === '' || fixture.league.name === selectedLeague)
  .map((fixture) => (
        <Link to={`/fixtures/${fixture.fixture.id}`}  key={fixture.fixture.id} >
        <div className='h-fit bg-white py-2'>
          <div align='center'>
            <img
              src={fixture.league.logo}
              width={25}
              alt={fixture.league.name}
            />
            {fixture.league.name}
          </div>
          <div className='text-center'>
            {fixture.fixture.status.long}          
          </div>

          <div className='w-full flex p-1'>
            <div className='w-[10%]' align='center'>
                <img src={fixture.teams.home.logo} alt={fixture.teams.home.name} width={50} />
              </div>
              <div className='w-[32%] text-right' >
                {fixture.teams.home.name}
              </div>
              <div className='w-[16%] text-center'>
            {fixture.goals.home} : {fixture.goals.away}
            </div>

            <div className='w-[32%] text-left' >
                {fixture.teams.away.name}
              </div>

              <div className='w-[10%]' align='center'>
                <img src={fixture.teams.away.logo} alt={fixture.teams.away.name} width={50} />
              </div>

            </div>


          <div className='text-center text-red-600 ' >
            {fixture.fixture.status.elapsed}

            </div>



        </div>

        </Link>
      ))}
    </div>

    );
}