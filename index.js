const http = require('http'),
  faye = require('faye');

const server = http.createServer(),
  bayeux = new faye.NodeAdapter({mount: '/'});

bayeux.attach(server);
server.listen(8000);