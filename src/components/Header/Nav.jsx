import React from 'react';

import NavItem from './NavItem';

const Nav = () => {
  return (
    <div className='w-fit flex flex-row justify-between align-center space-x-8'>
      <NavItem path={'/#educators'}>For Educators</NavItem>
      <NavItem path={'/#students'}>For Students</NavItem>
      <NavItem path={'/blog'}>Blog</NavItem>
      <NavItem path={'/community'}>Community</NavItem>
    </div>
  )
}

export default Nav;
