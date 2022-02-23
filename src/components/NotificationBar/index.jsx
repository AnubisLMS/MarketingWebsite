import React from 'react';
import {Link} from 'gatsby';

const NotificationBar = ({content, link}) => {
  return (
    <div className='w-full h-10 flex flex-row items-center font-semibold justify-center bg-gray-3 fixed top-0 z-30'>
      <div className='w-max flex flex-row items-center text-white'>
        <h2>{content}</h2>
        <Link to={link} className='m-2 underline font-bold'>Click to read more...</Link>
      </div>
    </div>
  )
}

export default NotificationBar;