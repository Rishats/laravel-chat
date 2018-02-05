// LESSON 1 (CHAT)

// var io = require('socket.io')(6001);
//
// io.on('connection', function (socket) {
//    console.log('New connection',socket.id);
//
//    socket.on('message', function (data) {
//        socket.broadcast.send(data);
//    });
//
//    // Send message
//    // socket.send('Message from server');
//
//     // Fire event
//    // socket.emit('server-info', {version: .1});
//
//     // Send data about new user to people on the site(in console);
//    //socket.broadcast.send('New user');
//
//     // Insert in to group(new user)
//     // socket.join('vip', function (error) {
//     //     console.log(socket.rooms);
//     // });
// });

// LESSON 1 (CHAT)

var Redis = require('ioredis'),
    redis = new Redis();

redis.psubscribe('*', function (error, count) {
    //...
});

redis.on('pmessage', function (pattern, channel, message) {
    console.log(channel, message);
});

