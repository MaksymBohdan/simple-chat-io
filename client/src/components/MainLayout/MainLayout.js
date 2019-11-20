import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import bg from '../../assets/bg.jpg';

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  width: 50vw;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainLayout = ({ children }) => (
  <FullScreen>
    <Reset />
    <Content>{children}</Content>
  </FullScreen>
);

export default MainLayout;
