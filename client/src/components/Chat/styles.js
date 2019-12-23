import styled from 'styled-components';

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  position: relative;
`;

const ChatWrapperInner = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  padding-left: 8px;
  box-sizing: content-box;
`;

const LeaveChatButton = styled.div`
  font-size: 30px;
  color: white;
  top: 0;
  right: 0;
  position: absolute;
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const MessageArea = styled.textarea`
  width: 80%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  bottom: 0;
  overflow: auto;
  resize: none;
  outline: none;
  box-sizing: border-box;
  border: none;
`;

const SendMessageDiv = styled.div`
  background-color: rgb(255, 255, 255);
  border: none;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SendImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const MessageItem = styled.li`
  overflow-wrap: break-word;
  display: flex;
  justify-content: ${props => (props.isOwnMessage ? 'flex-end' : 'fex-start')};
`;

export {
  ChatWrapper,
  MessageArea,
  LeaveChatButton,
  SendMessageDiv,
  SendImg,
  TextAreaWrapper,
  ChatWrapperInner,
  MessageItem
};
