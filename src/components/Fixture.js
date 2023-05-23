import React from 'react'
import { useParams } from 'react-router-dom'
import BALL from '../assets/ball.png'


const Fixture = ({ data }) => {
 // const [fixture, setFixture] = useState([]);

 const params = useParams();
 const matchId = params.matchId;

 const results = data.response.filter((match) => {
   console.log(match);
   return String(match.fixture.id) === matchId;
 });

 const fixture = results[0];

 // const fetchInfo = async () => {
 //   const data = await fetchFixtures();

 //   const results = data.response.filter((match) => {
 //     console.log(match);
 //     return String(match.fixture.id) === matchId;
 //   });

 //   setFixture(results[0]);
 // };

 // useEffect(() => {
 //   fetchInfo();
 // }, []);

   if (!fixture) return <div className='flex h-screen items-start justify-center mt-10 p-10' ><progress className="progress w-56"></progress> </div>;
  return (
    <div className='h-fit min-h-screen bg-white text-black'>
      <div className='py-2'>
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
      <div align='center' className='grid grid-cols-1 divide-y'>
        <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Events</h1>
        {!fixture.events
          ? null
          : fixture.events.map((event) => (
              <div className='bg-white  p-5' key={event.team.id + 1}>
                {event.type === 'Goal' ? (
                  <div>
                    <img src={BALL} width={25} alt='' />
                  </div>
                ) : (
                  <div className='badge badge-warning'>{event.type === 'Card' ? event.detail : event.type}</div>
                )}{' '}
                {event.player.name}{' '}
                <div className='text-green-700 pb-2'>{event.time.elapsed}</div>
                <div className=''>
                  <img src={event.team.logo} width={25} alt={event.team.name} />
                </div>
              </div>
            ))}
      </div>

      <div align='center' className='grid grid-cols-1 divide-y'>
        <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Score</h1>

        <div className='bg-white p-2'>
          First Half
          <br />
          {fixture.score.halftime.home} : {fixture.score.halftime.away}
        </div>

        {fixture.score.fulltime.home ? (
          <div className='p-2'>
            Full Time
            <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        ) : null}

        {fixture.score.extratime.home ? (
          <div className='p-2'>
            Extra Time
            <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
          </div>
        ) : null}

        {fixture.score.penalty.home ? (
          <div className='p-2'>
            Penalties
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        ) : null}
      </div>

      <div align='center' className='grid grid-cols-1 divide-y'>
        <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Match Details</h1>
        <div className='p-2 bg-white'>Stadium - {fixture.fixture.venue.name} </div>
        <div className='p-2 bg-white'>Country - {fixture.league.country} </div>
        <div className='p-2 bg-white'>{fixture.league.round} </div>
        <div className='p-2 bg-white'>Season {fixture.league.season - 2000}/{fixture.league.season - 1999} </div>
        </div>
    </div>
  )
}

export default Fixture
