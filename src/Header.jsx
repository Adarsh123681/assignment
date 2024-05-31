import React from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <>
       <section className="navbar w-full h-30 bg-black opacity-25 text-white hover:bg-black hover:opacity-75 hover:text-white transition-all duration-400 absolute">
        <nav className='flex justify-between'>
          <span className='name'>
            <span className="name text-3xl flex my-6 ml-5 font-bold p-4">Foster <FaPlus className='m-1' /> Partners</span>
          </span>
          <span className='icons flex text-2xl p-8 text-white '>
            <span className='p-4 hover:rounded-full hover:bg-white '> <FaSearch className='mx-4'/></span>
            <span className="p-4 hover:rounded-full hover:bg-white"> <GiHamburgerMenu/></span>
          </span>
        </nav>
      </section>

    </>
  )
}

export default Header