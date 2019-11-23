import React from 'react';
import Logo from '../Logo/Logo';

import { Reset, FullScreen, Content, LogoWrapper, ChatWrapper } from './styles';

const MainLayout = ({ children, user }) => (
  <FullScreen>
    <Reset />
    <Content>
      <LogoWrapper>
        <Logo user={user} />
      </LogoWrapper>
      <ChatWrapper>{children}</ChatWrapper>
    </Content>
  </FullScreen>
);

export default MainLayout;
