import React from 'react'

import block1Image from '../../images/block1.png';
import block2Image from '../../images/block2.png';
import block3Image from '../../images/block3.png';
import block4Image from '../../images/block4.png';

const AppBlocks = () => {
  return (
    <div className='w-full mt-40'>
      <div className='space-y-3'>
        <h1 className='text-4xl font-semibold'>By Students. <span className='text-primary'>For Students.</span> </h1>
        <p className='text-xl text-gray'>Anubis is built by CS students who understand the struggle of juggling many courses and environments.</p>
      </div>
      <div className='w-full mt-10'>
        <img className='' src={block1Image} />
      </div>
      <div className='w-full grid grid-cols-6 gap-12 mt-12'>
        <img  className='col-span-3 w-full' src={block2Image} />
        <div className='col-span-3 w-full flex flex-col justify-between'>
          <img className='w-full' src={block3Image} />
          <img className='w-full' src={block4Image} />
        </div>
      </div>

    </div>
  )
}

export default AppBlocks;