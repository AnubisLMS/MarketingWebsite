import React from 'react';
import bookIcon from '../../images/icons/Book.svg';
import heartIcon from '../../images/icons/heart.svg';
import filterIcon from '../../images/icons/Filter.svg';

const Stats = () => {
  return (
    <div className='w-full mt-20'>
      <div className='pb-xl pt-xl'>
        <div className='w-full grid grid-cols-3'>
          {stats.map((stat, index) => (
            <div key = {`${index}-${stat.name}`} className={classes.stat}>
              <img src ={icons[stat.iconIndex]} className = {classes.icon} />
              <div>
                <h2 className={classes.title}>{stat.title}</h2>
                <p className={classes.desc}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Stats;

const stats = [
  {
    title: '500+',
    description: 'Students Coding.',
    iconIndex: 0,
  },
  {
    title: '6+',
    description: 'Courses Registered.',
    iconIndex: 1,
  },
  {
    title: '99.9%',
    description: 'Semester Uptime.',
    iconIndex: 2,
  }
];

const icons = [heartIcon, bookIcon, filterIcon];

const classes = {
  stat: 'p-lg flex flex-row items-center justify-start space-x-4',
  title: 'text-4xl font-bold',
  desc: 'text-xl text-gray',
  icon: 'w-16',
}
