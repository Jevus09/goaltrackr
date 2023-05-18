import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

<li>
        <Link to="/leagues" >
          Premier League
        </Link>
      </li>
      <li>
        <button >
          La Liga
        </button>
      </li>
      <li>
        <button >
          Serie A
        </button>
      </li>
      <li>
        <button >
          Ligue 1
        </button>
      </li>
      <li>
        <button >
          Bundesliga
        </button>
      </li>
</ul>
    
    
    </>
  )
}

export default Sidebar