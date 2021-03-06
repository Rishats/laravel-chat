import io from 'socket.io-client';
var socket = io(':6001/anonymous_chat');
var moment = require('moment');
var room = 'a_chat';

socket.on('connect', function() {
    socket.emit('room', room);
});

function appendMessage(user_login,data) {
    $('.chat').append(
        $('<li class="user_login">').html(user_login + ' <span class="user_message_time">[' + moment().format('HH:mm:ss') + ']</span>'),
        $('<li class="user_message">').text(data.message)
    );
}
$('form').on('submit', function () {
    var text = $('#Message').val(),
        msg = {message: text};
    socket.send(msg);
    appendMessage(socket.id,msg);

    $('#Message').val('');
    return false;

});

socket.on('message', function (user_login,data) {
    console.log('User:');
    console.log(user_login);
    console.log('Message:');
    console.log(data);
    appendMessage(user_login,data);
});

socket.on('users_online', function (data) {
    console.log(data);
    $('.current_online').empty().append(
        $('<p>').text('Current online: ' + data.online)
    )
});
