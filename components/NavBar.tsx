import React from 'react'
import NavLink from './NavLink'

const NavBar: React.FC = () => {
  return (
    <header className='bg-black'>
      <nav>
        <ul>
          <NavLink href='/dashboard' text='Dashboard' />
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
