import React from 'react';
import discordImage from '../../images/discord.png';

const InterestedBlock = () => {
  return (
    <div className='w-full mt-16'>
      <div className='w-full bg-gray-3 rounded-lg flex flex-col justify-center items-start p-xl space-y-4'>
        <h1 className='text-4xl font-bold '>Do you want Anubis for your course?</h1>
        <p className='text-xl  w-3/4 font-medium text-gray'> Wether you are an educator looking for new tools for your course. Or a student in search of a easy development environment. Reach out to us and let us know how we can help!</p>
        <div className='flex flex-row items-center space-x-4'>
          <button className='pr-md pl-md pt-sm pb-sm bg-primary rounded-md h-14 text-lg cursor-pointer hover:opacity-80'>Reach Out</button>
          <div className='pr-md pl-md bg-black rounded-lg hover:opacity-70 cursor-pointer'>
            <img className='h-16' src={discordImage} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default InterestedBlock;