require('dotenv').config();
var io = require('socket.io')(6001, {
    origin : process.env.APP_URL + ':*',
});
const anonymousChatNamespace = io.of('/anonymous_chat');
const ChatNamespace = io.of('/chat');
var Redis = require('ioredis');
var mysql = require('mysql');
var moment = require('moment');

anonymousChatNamespace.on('connection', function (socket) {
   socket.join('a_chat'); // Create room for anonymous chat.
   console.log('New connection',socket.id); // Send info in to console about new client.
   var room = socket.adapter.rooms['a_chat']; // Use for count users in room.
   saveAnonymousChatOnline(room.length); // Save current online in to redis.
   socket.emit('users_online', { online: room.length }); // Send current online to user which firstly connected.
   socket.broadcast.emit('users_online', { online: room.length });  // Send current online to all users online.

   socket.on('disconnect', function() {
       saveAnonymousChatOnline(room.length);  // Save current online in to redis.
       socket.broadcast.emit('users_online', { online: room.length });  // Send current online to socket.
       console.log('New disconnection',socket.id); // Send info in to console about new disconnection.
   });

   socket.on('message', function (data) {
       socket.broadcast.send(socket.id,data);
       saveAnonymousChatMessage(socket.id,data.message); // Save last user message.
   });

});

ChatNamespace.on('connection', function (socket) {
    socket.join('chat'); // Create room for chat.
    console.log('New connection',socket.id); // Send info in to console about new client.
    var room = socket.adapter.rooms['chat']; // Use for count users in room.
    saveChatOnline(room.length); // Save current online in to redis.
    socket.emit('users_online', { online: room.length }); // Send current online to user which firstly connected.
    socket.broadcast.emit('users_online', { online: room.length });  // Send current online to all users online.

    socket.on('disconnect', function() {
        saveChatOnline(room.length);  // Save current online in to redis.
        socket.broadcast.emit('users_online', { online: room.length });  // Send current online to socket.
        console.log('New disconnection',socket.id); // Send info in to console about new disconnection.
    });

    socket.on('message', function (data) {
        socket.broadcast.send(socket.id,data);
        saveChatMessage(socket.id,data.message); // Save last user message.
    });

});

// Connect to the redis server.
var redis = new Redis({
    port: process.env.REDIS_PORT,            // Redis port
    host: process.env.REDIS_HOST,           // Redis host
    family: 4,                             // 4 (IPv4) or 6 (IPv6)
    password: process.env.REDIS_PASSWORD, // Redis password
    db: process.env.REDIS_DB              // Redis DB number.
});

// Connect to Mysql Server
var mysql_conntection = mysql.createConnection({
    host: process.env.DB_HOST,                  // MySQL host
    port: process.env.DB_PORT,                // MySQL port
    database: process.env.DB_DATABASE,      // MySQL password
    user: process.env.DB_USERNAME,        // MySQL username
    password: process.env.DB_PASSWORD   // MySQL password
});

// Open connection MySQL
mysql_conntection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

function saveAnonymousChatMessage(socket_id, message) // Function save user messages from socket.io in to mysql.
{
    var sql = "INSERT INTO anonymous_chat_messages (socket_id, message,created_at,updated_at) VALUES ?";
    var values = [
        [socket_id, message, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), moment(new Date()).format("YYYY-MM-DD HH:mm:ss")]
    ];
    mysql_conntection.query(sql, [values], function (err) {
        if (err) throw err;
    });
}

function saveAnonymousChatOnline(online) // Function save current online in socket.io in to redis.
{
    redis.set('anonymous_chat_online',online);
}

function saveChatMessage(socket_id, message) // Function save user messages from socket.io in to mysql.
{
    var sql = "INSERT INTO chat_messages (socket_id, message,created_at,updated_at) VALUES ?";
    var values = [
        [socket_id, message, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), moment(new Date()).format("YYYY-MM-DD HH:mm:ss")]
    ];
    mysql_conntection.query(sql, [values], function (err) {
        if (err) throw err;
    });
}

function saveChatOnline(online) // Function save current online in socket.io in to redis.
{
    redis.set('chat_online',online);
}