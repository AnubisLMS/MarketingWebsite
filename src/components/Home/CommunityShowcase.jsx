import React, {useEffect, useState} from 'react';

const CommunityShowcase = () => {
  const [repo, setRepo] = useState(undefined);

  useEffect(() => {
    fetch(`https://api.github.com/repos/GusSand/Anubis`, {method: "GET"})
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRepo(response);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className='w-full mt-44'>
      <div className='space-y-3'>
        <h1 className='text-4xl font-semibold'>Community. <span className='text-primary'>Contribution and Usage.</span> </h1>
        <p className='text-xl text-gray'>Anubis is built by CS students who understand the struggle of juggling many courses and environments.</p>
      </div>
      <div className='w-full grid-cols-12 grid mt-16'>
        { repo && stats.map((stat, index) => (
          <div key={`${index}-${stat.title}`} className={classes.stat}>
            <h1 className={classes.statTitle}>{repo[stat.key]}+</h1>
            <p className={classes.statDesc}>{stat.description}</p>
          </div>
        ))}
      </div>
      <div className='w-full grid grid-cols-12 gap-6 mt-16'>
        {resources.map((resource, index) => (
          <div key={`${index}-${resource.title}`} className={classes.resource}>
            <p className={classes.resourceTag}>{resource.tag}</p>
            <h1 className={classes.resourceTitle}>{resource.title}</h1>
            <p className={classes.resourceDesc}>{resource.description}</p>
          </div>
          ))}
      </div>
    </div>
  )
}

export default CommunityShowcase;

const classes = {
  stat: 'col-span-3',
  statTitle: 'text-5xl font-bold',
  statDesc: 'text-2xl text-gray',
  resource: 'col-span-6 space-y-2 bg-gray-3 w-full rounded-md pt-md pb-md pr-lg pl-lg cursor-pointer hover:opacity-80',
  resourceTag: 'text-xl text-primary',
  resourceTitle: 'text-3xl font-semibold',
  resourceDesc: 'text-lg text-gray',
}

const resources = [
  {
    tag: 'Community',
    title: 'Contribution Guide',
    description: 'A simple guide on how you can contribute to Anubis'
  },
  {
    tag: 'Community',
    title: 'Development Guide',
    description: 'A guide on how you can get Anubis running locally, and how to make choose and solve issues.'
  },
  {
    tag: 'Usage',
    title: 'Student Usage Guide',
    description: 'Are you a student? Is your course using Anubis? Read this and learn how to use anubis efficiantly and get work done',
  },
  {
    tag: 'Usage',
    title: 'Educator Usage Guide',
    description: 'Just started using Anubis for your course? Need a refresh? Read this and get the basics on how to set your students up for sucess',
  }
]

const stats = [
  {
    key: 'watchers',
    description: 'Repo Stars.',
  },
  {
    key: 'forks',
    description: 'Repo Forks.',
  },
  {
    key: 'open_issues',
    description: 'Open Issues.',
  },
  {
    key: 'network_count',
    description: 'Contributors.'
  }
]
