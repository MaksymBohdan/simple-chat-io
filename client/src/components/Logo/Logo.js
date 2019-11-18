import React from 'react';
import unknownLogo from '../../assets/face.jpeg';

const Logo = ({ user, width = '100', height = '100' }) => (
  <img src={user ? user.image : unknownLogo} alt='face' width={width} height={height} />
);

export default Logo;
