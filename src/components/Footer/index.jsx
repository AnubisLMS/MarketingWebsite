import React from 'react';
import logoImage from '../../images/Logo.png'
import { Link } from 'gatsby';

const Footer = () => {
  return (
      <div className='w-full flex flex-col items-center pb-md pt-md mt-16'>
        <div className='w-full border-t-2 border-dashed border-gray opacity-40' />
        <div className='flex h-9 flex-row justify-between items-center w-full mt-8'>
          <div className='flex flex-row space-x-6 items-center'>
            <img className='h-9' src={logoImage} />
            <Link className='text-lg text-gray hover:text-white' to={'/team'}> Our Team</Link>
            <Link className='text-lg text-gray hover:text-white' to={'/getstarted'}> Get Started</Link>
            <Link className='text-lg text-gray hover:text-white' to={'/blog'}> Blog </Link>
          </div>
          <p className='text-lg text-gray'>Build by the Anubis Team</p>
        </div>
      </div>
  )
}

export default Footer;