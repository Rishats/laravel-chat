var io = require('socket.io')(6001);

io.on('connection', function (socket) {
   console.log('New connection',socket.id); // Send info in to console about new client.
   saveOnline(io.engine.clientsCount); // Save current online in to redis.

   socket.on('disconnect', function() {
       saveOnline(io.engine.clientsCount);  // Save current online in to redis.
   });

   socket.on('message', function (data) {
       socket.broadcast.send(data);
       saveMessage(socket.id,data.message); // Save last user message.
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

// Connect to the redis server.

var Redis = require('ioredis');
var redis = new Redis({
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: null,
    db: 4
});

function saveMessage(id, message) // Function save last user message from socket.io in to redis.
{
    redis.set(id, message);
}

function saveOnline(online) // Function save current online in socket.io in to redis.
{
    redis.set('online',online);
}
