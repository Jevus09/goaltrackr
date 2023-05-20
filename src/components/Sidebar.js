import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

<li>
        <Link to="/league/39" >
          Premier League
        </Link>
      </li>
      <li>
        <Link to='/league/' >
          La Liga
        </Link>
      </li>
      <li>
        <Link to='/league/' >
          Serie A
        </Link>
      </li>
      <li>
        <Link to='/league/' >
          Ligue 1
        </Link>
      </li>
      <li>
        <Link to='/league/78' >
          Bundesliga
        </Link>
      </li>

      <li>
        <Link to="/league" >
        Russian Premier League
        </Link>
      </li>
      <li>
        <Link to='/league/'>
        Primeira Liga
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Belgian Pro League
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Eredivisie
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Major League Soccer
        </Link>
      </li>

      <li>
        <Link to="/league" >
        Süper Lig
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Liga MX
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Campeonato Brasileiro Série A
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Scottish Premiership
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Argentine Primera División
        </Link>
      </li>

      <li>
        <Link to="/league" >
        Austrian Football Bundesliga
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Ukrainian Premier League
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Danish SuperLiga
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Swiss Super League
        </Link>
      </li>
      <li>
        <Link to='/league/' >
        Croatian First Football League
        </Link>
      </li>
      
</ul>
    
    
    </>
  )
}

export default Sidebar