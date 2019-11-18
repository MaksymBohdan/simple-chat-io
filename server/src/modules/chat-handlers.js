const allUsers = require('./usersList');

const chatHandlers = client => {
  const handleGetAllUsers = res => {
    return res(null, allUsers);
  };

  // обработчик на регистрацию клиента (устройства что подключилось к чату)
  const handleRegister = (userName, res) => {
    const user = allUsers.find(user => user.name === userName);
    return res(null, user);
  };

  return { handleGetAllUsers, handleRegister };
};

module.exports = chatHandlers;
