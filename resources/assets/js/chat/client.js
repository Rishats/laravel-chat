var socket = io(':6001');

function appendMessage(user_login,data) {
    $('.chat').append(
        $('<li class="user_login">').text(user_login),
        $('<li class="user_message">').text(data.message)
    )
}
$('form').on('submit', function () {
    var text = $('textarea').val(),
        msg = {message: text};
    socket.send(msg);
    appendMessage(socket.id,msg);

    $('textare').val('');
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
