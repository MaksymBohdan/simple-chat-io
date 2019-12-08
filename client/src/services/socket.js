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
    console.log('chatName', chatroomName);

    socket.emit('join', chatroomName, cb);
  };

  return {
    getAllUsers,
    registerClient,
    getAllChatrooms,
    joinClientToChat
  };
};

export default chatInit;
