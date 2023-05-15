import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/logos.png'

const Navbar = () => {
  return (
    <>
      <div data-theme="night" className='navbar bg-base-100'>
        <Link className='btn btn-ghost normal-case text-xl text-white' to={'/'}><img src={LOGO} width={28} alt='' />&nbsp; GoalTrackr</Link>
      </div>
    </>
  )
}

export default Navbar
