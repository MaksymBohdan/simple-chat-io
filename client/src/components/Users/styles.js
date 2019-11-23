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
  background-color: yellow;
  width: 200px;
  max-height: 50px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  overflow: hidden;
  text-align: justify;
  position: relative;
`;

const Inner = styled.div`
  width: 900px;
  height: 400px;
  overflow: auto;
  margin: 15px -300px 15px 15px;
  padding-right: 300px;
  display: flex;
  justify-content: center;
`;

export { Backdrop, ModalWindow, Inner, ReturnBtn };
