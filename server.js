var Redis = require('ioredis'); 
var redis = new Redis();
redis.psubscribe('*', function(error, count) {
  // ...
});
redis.on('pmessage', function(pattern, channel, message) {
  console.log(channel, message)
});