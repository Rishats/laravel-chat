var io = require('socket.io')(6001);

io.on('connection', function (socket) {
   console.log('New connection',socket.id);

   // Send message
   // socket.send('Message from server');

    // Fire event
   // socket.emit('server-info', {version: .1});

    // Send data about new user to people on the site(in console);
   socket.broadcast.send('New user');
});