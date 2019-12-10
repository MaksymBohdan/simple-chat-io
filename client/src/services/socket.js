import io from 'socket.io-client';

const chatInit = () => {
  const socket = io.connect('http://localhost:8001');

  const getAllUsers = cb => {
    socket.emit('allUsers', cb);
  };

  const getAllChatrooms = cb => {
    socket.emit('allChatRooms', cb);
  };

  const registerClient = (userName, cb) => {
    socket.emit('register', userName, cb);
  };

  const joinClientToChat = (chatroomName, cb) => {
    socket.emit('join', chatroomName, cb);
  };

  const leaveClientFromChat = (chatroomName, cb) => {
    socket.emit('leave', chatroomName, cb);
  };

  const handleReceiveMessage = joinMessage => {
    socket.on('message', joinMessage);
  };

  const unhandleReceiveMessage = () => {
    socket.off('message')
  }

  return {
    getAllUsers,
    registerClient,
    getAllChatrooms,
    joinClientToChat,
    leaveClientFromChat,
    handleReceiveMessage,
    unhandleReceiveMessage
  };
};

export default chatInit;
