import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Table({ data }) {
  const [selectedLeague, setSelectedLeague] = useState('')

  const resetFilter = () => {
    setSelectedLeague('')
  }

  const filteredFixtures = data.response.filter(
    (fixture) => selectedLeague === '' || fixture.league.id === selectedLeague
  )

  console.log(filteredFixtures)

  return (
    <>
      <div className='bg-gray-400 grid divide-y text-black '>
        <div className='navbar ' data-theme='night'>
          <div className='navbar-start '>
            <div className='dropdown '>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <button onClick={() => setSelectedLeague(3 || 2)}>
                    Champions League
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedLeague(39)}>
                    Premier League
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedLeague(140)}>
                    La Liga
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedLeague(135)}>
                    Serie A
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedLeague(186)}>
                    Ligue 1
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedLeague(78)}>
                    Bundesliga
                  </button>
                </li>
              </ul>
            </div>

              <button
                onClick={() => resetFilter()}
                className='btn btn-ghost normal-case text-green-600'
              >
                All Live Games
              </button>
              <div className='dropdown dropdown-end lg:hidden flex '>
                <label tabIndex={0} className='btn btn-ghost m-1 text-red-500 justify-self-end'>
                  All Leagues
                </label>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu p-2 shadow bg-base-100 rounded-box max-w-screen-sm '
                >
                  <Sidebar />
                </ul>
              </div>

          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1 text-white'>
              <li>
                <button onClick={() => setSelectedLeague(39)}>
                  Premier League
                </button>
              </li>
              <li>
                <button onClick={() => setSelectedLeague(140)}>La Liga</button>
              </li>
              <li>
                <button onClick={() => setSelectedLeague(135)}>Serie A</button>
              </li>
              <li>
                <button onClick={() => setSelectedLeague(186)}>Ligue 1</button>
              </li>
              <li>
                <button onClick={() => setSelectedLeague(78)}>
                  Bundesliga
                </button>
              </li>
              <li>
                <div className='dropdown dropdown-bottom dropdown-end'>
                  <label
                    tabIndex={0}
                    className='btn btn-ghost m-1 text-red-500 '
                  >
                    All Leagues
                  </label>
                  <ul
                    tabIndex={0}
                    className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 '
                  >
                    <Sidebar />
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${
            filteredFixtures.length <= 7 ? 'h-screen' : 'min-h-full'
          }`}
        >
          {filteredFixtures.length === 0 ? (
            <div className='bg-white py-2'>
              <div className='text-center'>No Live Games</div>
            </div>
          ) : (
            filteredFixtures.map((fixture) => (
              <Link
                to={`/fixtures/${fixture.fixture.id}`}
                key={fixture.fixture.id}
              >
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
                      <img
                        src={fixture.teams.home.logo}
                        alt={fixture.teams.home.name}
                        width={50}
                      />
                    </div>
                    <div className='w-[32%] text-right'>
                      {fixture.teams.home.name}
                    </div>
                    <div className='w-[16%] text-center'>
                      {fixture.goals.home} : {fixture.goals.away}
                    </div>

                    <div className='w-[32%] text-left'>
                      {fixture.teams.away.name}
                    </div>

                    <div className='w-[10%]' align='center'>
                      <img
                        src={fixture.teams.away.logo}
                        alt={fixture.teams.away.name}
                        width={50}
                      />
                    </div>
                  </div>

                  <div className='text-center text-red-600 '>
                    {fixture.fixture.status.elapsed}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  )
}
