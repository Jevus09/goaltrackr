import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Leagues } from '../lib/DummyLeague'

const League = () => {
  const params = useParams()
  const [response, setResponse] = useState(Leagues)
  const [selectedMatchDay, setSelectedMatchDay] = useState('Regular Season - 1')

  // const fetchInfo = async () => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  //     params: {
  //       league: Number(params.id),
  //       season: '2022'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
  //       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const axiosResponse = await axios.request(options);
  //     setResponse(axiosResponse.data);
  //     console.log('league', axiosResponse.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  console.log('league', response)

  if (!response || !Array.isArray(response.response)) {
    return (
      <div className='flex h-screen items-start justify-center mt-10 p-10'>
        <progress className='progress w-56'></progress>
      </div>
    )
  }

  return (
    <div className='h-fit min-h-screen text-black  '>
      <div className='flex place-content-between'>
      <Link to={'/'} className='btn btn-outline m-1 text-black '>Back</Link>
      <div className=' flex dropdown dropdown-hover text-white justify-center place-content-center '>
        <label className='btn btn-primary m-1 '>Matchday</label>
        <div>
        </div>
          <ul className='h-screen dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96'>
            {Array.from(
              new Set(response.response.map((item) => item.league.round))
            ).map((round) => (
              <li key={round}>
                <button onClick={() => setSelectedMatchDay(String(round))}>
                  {round}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div align='center'>
        <img
          src={response.response[1].league.logo}
          width={35}
          alt={response.response[1].league.name}
        />
        {response.response[1].league.name}
      </div>
      {response.response.map((item) => (
        <div key={item.fixture.id}>
          {item.league.round === selectedMatchDay && (
            <div className='p-5'>
              <div align='center'>
                {new Date(item.fixture.date).toLocaleDateString('en-US')}
              </div>
              <div className='text-center'>
                {item.fixture.status.long === 'Not Started'
                  ? new Date(item.fixture.date).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : item.fixture.status.short}
              </div>

              <div className='w-full flex p-1'>
                <div className='w-[10%]' align='center'>
                  <img
                    src={item.teams.home.logo}
                    alt={item.teams.home.name}
                    width={50}
                  />
                </div>
                <div className='w-[32%] text-right'>{item.teams.home.name}</div>
                <div className='w-[16%] text-center'>
                  {item.goals.away === null
                    ? 'VS'
                    : `${item.goals.home} : ${item.goals.away}`}
                </div>

                <div className='w-[32%] text-left'>{item.teams.away.name}</div>

                <div className='w-[10%]' align='center'>
                  <img
                    src={item.teams.away.logo}
                    alt={item.teams.away.name}
                    width={50}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default League
