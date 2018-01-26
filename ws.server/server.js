var io = require('socket.io')(6001);

io.on('connection', function (socket) {
   console.log('New connection',socket.id);

   socket.on('message', function (data) {
       socket.broadcast.send(data);
   });

   // Send message
   // socket.send('Message from server');

    // Fire event
   // socket.emit('server-info', {version: .1});

    // Send data about new user to people on the site(in console);
   //socket.broadcast.send('New user');

    // Insert in to group(new user)
    // socket.join('vip', function (error) {
    //     console.log(socket.rooms);
    // });
});