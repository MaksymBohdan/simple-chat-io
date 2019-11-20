const allUsers = require('./templates/usersList');
const allChatRooms = require('./templates/chatroomsList');

const chatHandlers = client => {
  const handleGetAllUsers = res => {
    return res(null, allUsers);
  };

  // обработчик на регистрацию клиента (устройства что подключилось к чату)
  const handleRegister = (userName, res) => {
    const user = allUsers.find(user => user.name === userName);
    return res(null, user);
  };

  const handleGetAllChatrooms = res => {
    return res(null, allChatRooms);
  };

  return { handleGetAllUsers, handleRegister, handleGetAllChatrooms };
};

module.exports = chatHandlers;
