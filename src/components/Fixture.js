import React from 'react'
import { useParams } from 'react-router-dom'
import BALL from '../assets/ball.png'

const Fixture = ({ data }) => {
  const params = useParams()

  const matchId = params.matchId

  const results = data.response.filter((match) => {
    return String(match.fixture.id) === matchId
  })

  const fixture = results[0]

  return (
    <div>
      <div className='bg-white py-2'>
        <div align='center'>
          <img src={fixture.league.logo} width={25} alt={fixture.league.name} />
          {fixture.league.name}
        </div>
        <div className='text-center'>{fixture.fixture.status.long}</div>

        <div className='w-full flex p-1'>
          <div className='w-[10%]' align='center'>
            <img
              src={fixture.teams.home.logo}
              alt={fixture.teams.home.name}
              width={50}
            />
          </div>
          <div className='w-[32%] text-right'>{fixture.teams.home.name}</div>
          <div className='w-[16%] text-center'>
            {fixture.goals.home} : {fixture.goals.away}
          </div>

          <div className='w-[32%] text-left'>{fixture.teams.away.name}</div>

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
        <div align='center' className='grid grid-cols-1 divide-y' >
            <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Events</h1>
            {!fixture.events
          ? null
          : fixture.events.map((event) => (
              <div className="p-5" key={event.team.id}>
                {event.type === "Goal" ? (
                  <div>
                    <img src={BALL} width={25} alt='' />
                  </div>
                ) : (
                  <div className="badge badge-warning">{event.type}</div>
                )}{" "}
                {event.player.name}{" "}
                <div className="text-green-700">{event.time.elapsed}</div>{event.team.name}
              </div>
            ))}

        </div>

    </div>
  )
}

export default Fixture
