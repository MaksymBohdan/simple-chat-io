const io = require('socket.io');
const chatHandlers = require('./chat-handlers');

const initChat = server => {
  const socketIo = io(server);

  socketIo.on('connection', client => {
    console.log('client connected...', client.id);
    const { handleGetAllUsers, handleRegister, handleGetAllChatrooms } = chatHandlers(client);

    client
      .on('allUsers', handleGetAllUsers)
      .on('register', handleRegister)
      .on('allChatRooms', handleGetAllChatrooms);
  });
};

module.exports = initChat;
