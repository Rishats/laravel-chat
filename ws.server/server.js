var io = require('socket.io')(6001);
var Redis = require('ioredis');
var mysql = require('mysql');
var moment = require('moment');

io.on('connection', function (socket) {
   console.log('New connection',socket.id); // Send info in to console about new client.
   saveOnline(io.engine.clientsCount); // Save current online in to redis.

   socket.on('disconnect', function() {
       saveOnline(io.engine.clientsCount);  // Save current online in to redis.
   });

   socket.on('message', function (data) {
       socket.broadcast.send(socket.id,data);
       saveMessage(socket.id,data.message); // Save last user message.
   });

});

// Connect to the redis server.
var redis = new Redis({
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: null,
    db: 4
});

// Connect to Mysql Server
var mysql_conntection = mysql.createConnection({
    host: "localhost",
    user: "homestead",
    database: "laravel-chat.test",
    password: "secret"
});

// Open connection MySQL
mysql_conntection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

function saveMessage(socket_id, message) // Function save user messages from socket.io in to mysql.
{
    var sql = "INSERT INTO chat_messages (socket_id, message,created_at,updated_at) VALUES ?";
    var values = [
        [socket_id, message, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), moment(new Date()).format("YYYY-MM-DD HH:mm:ss")]
    ];
    mysql_conntection.query(sql, [values], function (err) {
        if (err) throw err;
    });
}

function saveOnline(online) // Function save current online in socket.io in to redis.
{
    redis.set('online',online);
}