import { Reset } from 'styled-reset';
import styled from 'styled-components';
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

const LogoWrapper = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
`;

const ChatWrapper = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export { Reset, FullScreen, Content, LogoWrapper, ChatWrapper };
