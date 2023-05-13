import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div data-theme="dark" className='navbar bg-base-100'>
        <Link className='btn btn-ghost normal-case text-xl' to={'/'}>GoalTrackr</Link>
      </div>
    </>
  )
}

export default Navbar
