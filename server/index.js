const server = require('./src/server');
const { port } = require('./configs');

server.listen(port, () => {
  console.log('server started');
});
