import React from 'react';
import Layout from '../components/Layout';

const Blog = () => {
  const BlogPost = () => {
    return (
      <div>

      </div>
    )
  }
  return (
    <Layout>
      <div className='sm:w-fit lg:w-max'>
        <div className='space-y-3 mt-52'>
          <h1 className='text-4xl font-semibold'>Anubis<span className='text-primary'> Blog</span> </h1>
          <p className='text-xl text-gray'>A collection of posts by our developers and maintainers.</p>
        </div>
        <div className='flex flex-col items-center'>
          <div/>
        </div>
      </div>
    </Layout>
  )
}

export default Blog;