import styled from 'styled-components';

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  position: relative;
`;

const MessageArea = styled.textarea`
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  bottom: 0;
  resize: none;
  outline: none;
  box-sizing: border-box;
`;

export { ChatWrapper, MessageArea };
