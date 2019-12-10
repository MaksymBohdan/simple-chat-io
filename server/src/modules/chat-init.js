const io = require('socket.io');
const chatHandlers = require('./chat-handlers');

const initChat = server => {
  const socketIo = io(server);

  socketIo.on('connection', client => {
    console.log('client connected...', client.id);
    const {
      handleGetAllUsers,
      handleClientRegistration,
      handleGetAllChatrooms,
      handleJoinClient,
      handleLeaveClient
    } = chatHandlers(client);

    client
      .on('allUsers', handleGetAllUsers)
      .on('allChatRooms', handleGetAllChatrooms)
      .on('register', handleClientRegistration)
      .on('join', handleJoinClient)
      .on('leave', handleLeaveClient);
  });
};

module.exports = initChat;
