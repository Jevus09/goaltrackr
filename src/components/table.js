import React from 'react'
import { Link } from 'react-router-dom';

export default function Table({ data }) {
  return (
    
    <div className='bg-gray-400 grid grid-cols-1 divide-y text-black'>
      {data.response.map((fixture) => (
        <Link to={`/fixtures/${fixture.fixture.id}`}  key={fixture.fixture.id} >
        <div className='bg-white py-2'>
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