import React, {useEffect, useState} from 'react';
import Layout from '../Layout';

const Community = () => {
  const [repo, setRepo] = useState(undefined);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/repos/AnubisLMS/Anubis/contributors`, {method: "GET"})
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setRepo(response);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <Layout>
      {repo &&
        <>
          <div className='w-max mt-52'>
            <div className='w-full flex flex-col rounded-md space-y-3'>
              <p className='text-primary text-xl'>THE ANUBIS COMMUNITY</p>
              <h1 className='text-4xl font-bold'>Students Supporting Students</h1>
              <p className='text-xl '>A collection of resources and guides from various members of the Anubis Community
                to help you succeed.</p>
            </div>
          </div>
          <div className='space-y-3 mt-20'>
            <p className='text-xl font-semibold'>Contributors: </p>
          </div>
          <div className='flex flex-row space-x-4 mt-8'>
            {repo.map((contributor, index) => (
              <a className='cursor-pointer' href={contributor.html_url}>
                <img src={contributor.avatar_url} className='w-12 h-12 rounded-full border-2 border-primary'/>
              </a>
            ))}
          </div>
          <div className='space-y-3 mt-10'>
            <p className='text-xl font-semibold'>Featured Content: </p>
          </div>
          <div className='w-full grid grid-cols-12 gap-6 mt-8'>
            {resources.map((resource, index) => (
              <a key={`${index}-${resource.title}`} className={classes.resource} href={resource.href} target='_blank' rel='noreferrer'>
                <p className={classes.resourceTag}>{resource.tag}</p>
                <h1 className={classes.resourceTitle}>{resource.title}</h1>
                <p className={classes.resourceDesc}>{resource.description}</p>
              </a>
            ))}
          </div>
        </>
      }
      <div className='space-y-3 mt-10'>
        <p className='text-3xl font-semibold'>Ask our Community! </p>
      </div>
      <div className='flex flex-col mt-8 space-y-3'>
        <p className='text-xl'>Question Title</p>
        <input className='bg-black p-md border-2 border-gray rounded-sm' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <p className='text-xl'>Question Body</p>
        <textarea rows='10' className='bg-black p-md border-2 h-44 border-gray rounded-sm' value={body} onChange={(e) => setBody(e.target.value)}/>
        <div className='flex items-center justify-center'>
          <a
            href={`https://github.com/AnubisLMS/Anubis/issues/new?assignees=&labels=question&template=custom.md&title=Question%20-%20${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`}
            rel='noreferrer'
            target='_blank'
          >
            <button className='w-full border-2 border-primary text-xl text-primary font-semibold p-md hover:bg-primary hover:text-white'>
              Send Question
            </button>
          </a>
        </div>

      </div>
    </Layout>
  )
}

const classes = {
  resource: 'col-span-6 space-y-2 bg-gray-3 w-full rounded-md pt-md pb-md pr-lg pl-lg cursor-pointer hover:opacity-80',
  resourceTag: 'text-xl text-primary',
  resourceTitle: 'text-3xl font-semibold',
  resourceDesc: 'text-lg text-gray',
}

const resources = [
  {
    tag: 'Community',
    title: 'Contribution Guide',
    description: 'A simple guide on how you can contribute to Anubis',
    href: 'https://github.com/AnubisLMS/Anubis/blob/master/.github/CONTRIBUTING.md',
  },
  {
    tag: 'Community',
    title: 'Development Guide',
    description: 'A guide on how you can get Anubis running locally, and how to make choose and solve issues.',
    href: 'https://github.com/AnubisLMS/Anubis/blob/master/docs/development_guide.md',
  },
  // {
  //   tag: 'Usage',
  //   title: 'Student Usage Guide',
  //   description: 'Are you a student? Is your course using Anubis? Read this and learn how to use anubis efficiently and get work done',
  // },
  // {
  //   tag: 'Usage',
  //   title: 'Educator Usage Guide',
  //   description: 'Just started using Anubis for your course? Need a refresh? Read this and get the basics on how to set your students up for success',
  // }
]
export default Community;
