import React from 'react';

import { LogoImg, StyledLink, LogoSpace } from './styles';
import unknownLogo from '../../assets/logo.jpeg';

const Logo = ({ user, width = '150', height = '150' }) => (
  <>
    <LogoSpace>
      <StyledLink to='/users'>
        <LogoImg src={user ? user.image : unknownLogo} alt='face' width={width} height={height} />
        <p>{user ? user.name : 'Who are you?'}</p>
      </StyledLink>
    </LogoSpace>
  </>
);

export default Logo;
