import io from 'socket.io-client';

const chatInit = () => {
  const socket = io.connect('http://localhost:8001');

  const regiterHandlers = onMessageReceived => {
    socket.emit('message', onMessageReceived);
  };

  const getAllUsers = cb => {
    socket.emit('allUsers', cb);
  };

  return {
    regiterHandlers,
    getAllUsers
  };
};

export default chatInit;
