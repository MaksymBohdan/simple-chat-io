import io from 'socket.io-client';

const chatInit = () => {
  const socket = io.connect('http://localhost:8001');

  const getAllUsers = cb => {
    socket.emit('allUsers', cb);
  };

  const register = (userName, cb) => {
    socket.emit('register', userName, cb);
  };

  const getAllChatrooms = cb => {
    socket.emit('allChatRooms', cb);
  };

  return {
    getAllUsers,
    register,
    getAllChatrooms
  };
};

export default chatInit;
