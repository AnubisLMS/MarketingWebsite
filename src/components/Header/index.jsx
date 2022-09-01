import React from 'react';
import Nav from './Nav';
import Logo from '../Logo';

const Header = () => {
  return (
    <div
      className='w-full flex flex-row justify-center items-center pt-lg pb-lg border-b-2 border-gray-3 fixed top-0 bg-black z-30'>
      <div className='lg:w-max md:w-fit sm:w-min flex flex-row justify-between items-center text-white'>
        <div className='flex flex-row items-center space-x-10 justify-center'>
          <Logo/>
          <Nav/>
        </div>
        <div>
          <a href="https://anubis.osiris.services/api/public/auth/login" target="_blank">
            <button className='pb-sm pt-sm pl-md pr-md bg-primary rounded-sm hover:opacity-90'>
              Sign In
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;
