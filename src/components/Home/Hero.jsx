import React from 'react';

import Stats from './Stats';
import heroImage from '../../images/heroImage.png';

const Hero = () => {
  return (
    <div className='w-full mt-20 pt-2xl pb-2xl relative'>
      <img src={heroImage} className='absolute right-5 -top-10 w-6/12'/>
      <div className='w-7/12 flex flex-col space-y-10'>
        <div className='space-y-4'>
          <h1 className='text-6xl font-semibold'>Completely automate</h1>
          <h1 className='text-6xl font-semibold'>
            your course.
          </h1>
        </div>
        <p className='text-gray text-2xl w-3/4'>Anubis is a Learning Management System that allows courses to provide consistent and customizable development environment for students. And completely automate the learning process.</p>
        <button className='pb-sm pt-sm bg-primary hover:opacity-90 rounded-sm w-48 text-xl'> Get Started</button>
      </div>
      <Stats />
    </div>
  )
}

export default Hero;