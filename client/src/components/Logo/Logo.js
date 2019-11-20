import React from 'react';
import { Link } from 'react-router-dom';

import unknownLogo from '../../assets/face.jpeg';


const Logo = ({ user, width = '150', height = '150' }) => (
  <div>
    <Link to='/users'>
      <img src={user ? user.image : unknownLogo} alt='face' width={width} height={height} />
      <br />
      {user ? user.name : 'Who are you ?'}
    </Link>
  </div>
);

export default Logo;
