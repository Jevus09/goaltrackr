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
        <Link to='/league/140' >
          La Liga
        </Link>
      </li>
      <li>
        <Link to='/league/135' >
          Serie A
        </Link>
      </li>
      <li>
        <Link to='/league/61' >
          Ligue 1
        </Link>
      </li>
      <li>
        <Link to='/league/78' >
          Bundesliga
        </Link>
      </li>

      <li>
        <Link to="/league/235" >
        Russian Premier League
        </Link>
      </li>
      <li>
        <Link to='/league/94'>
        Primeira Liga
        </Link>
      </li>
      <li>
        <Link to='/league/144' >
        Belgian Pro League
        </Link>
      </li>
      <li>
        <Link to='/league/88' >
        Eredivisie
        </Link>
      </li>
      <li>
        <Link to='/league/253' >
        Major League Soccer
        </Link>
      </li>

      <li>
        <Link to="/league/203" >
        Süper Lig
        </Link>
      </li>
      <li>
        <Link to='/league/262' >
        Liga MX
        </Link>
      </li>
      <li>
        <Link to='/league/71' >
        Campeonato Brasileiro Série A
        </Link>
      </li>
      <li>
        <Link to='/league/179' >
        Scottish Premiership
        </Link>
      </li>
      <li>
        <Link to='/league/128' >
        Argentine Primera División
        </Link>
      </li>

      <li>
        <Link to="/league/218" >
        Austrian Football Bundesliga
        </Link>
      </li>
      <li>
        <Link to='/league/333' >
        Ukrainian Premier League
        </Link>
      </li>
      <li>
        <Link to='/league/119' >
        Danish SuperLiga
        </Link>
      </li>
      <li>
        <Link to='/league/207' >
        Swiss Super League
        </Link>
      </li>
      <li>
        <Link to='/league/210' >
        Croatian First Football League
        </Link>
      </li>
      
</ul>
    
    
    </>
  )
}

export default Sidebar