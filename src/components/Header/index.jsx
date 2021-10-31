import React from 'react';
import Nav from './Nav';
import Logo from '../Logo';

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-center items-center pt-lg pb-lg border-b-2 border-gray-3 fixed top-10 bg-black z-30'>
      <div className='w-max flex flex-row justify-between items-center text-white'>
        <div className='flex flex-row items-center space-x-10 justify-center'>
          <Logo />
          <Nav />
        </div>
        <div>
          <button className='pb-sm pt-sm pl-md pr-md bg-primary rounded-sm hover:opacity-90'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
