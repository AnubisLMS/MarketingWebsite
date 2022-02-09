import React from 'react';
import Layout from '../components/Layout';

const UserStories = () => {
  const UserStoriesPost = () => {
    return (
      <div>

      </div>
    )
  }
  return (
    <Layout>
      <div className='w-max'>
        <div className='space-y-3 mt-52'>
          <h1 className='text-4xl font-semibold'>Anubis<span className='text-primary'> User Stories</span> </h1>
          <p className='text-xl text-gray'>A collection of stories and experiences by our users.</p>
        </div>
        <div className='flex flex-col items-center'>
          <div/>
        </div>
      </div>
    </Layout>
  )
}

export default UserStories;