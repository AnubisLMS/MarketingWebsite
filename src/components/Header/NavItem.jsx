import React from 'react';

import {Link} from 'gatsby';

const NavItem = ({path, children}) => {
  return (
    <div className='hover:text-primary '>
      <Link to={path}>
        {children}
      </Link>
    </div>
  )
}

export default NavItem;
