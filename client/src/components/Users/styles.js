import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ReturnBtn = styled.div`
  font-size: 30px;
  position: absolute;
  color: white;
  top: 0;
  right: 0;
`;

const ModalWindow = styled.div`
  width: 800px;
  height: 500px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: justify;
  position: relative;
`;

const Inner = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  padding-right: 17px;
  overflow-y: scroll;
  box-sizing: content-box;
`;

const UserPhoto = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
`;

const UserItem = styled.li`
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export { Backdrop, ModalWindow, Inner, ReturnBtn, UserPhoto, UserItem };
