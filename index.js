var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

const config = require('./config');
config.connDb().catch( () => {
  console.log("db connection error " , err);
});

var usersService = require('./users');
server.get('/users',usersService.usersList);
server.get('/user/:id',usersService.user);
server.post('/userstore',usersService.addUser);