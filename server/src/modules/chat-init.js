const io = require('socket.io');

const initChat = server => {
  console.log('server', server);

  const socketIo = io(server);

  socketIo.on('connection', client => {
    console.log('client', client);

    client.on('disconect', () => {
      console.log('client disconected', client);
    });
  });
};

module.exports = initChat;
