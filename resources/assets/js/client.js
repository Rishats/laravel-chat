var socket = io(':6001');

function appendMessage(data) {
    $('.chat').append(
        $('<li/>').text(data.message)
    )
}
$('form').on('submit', function () {
    var text = $('textarea').val(),
        msg = {message: text};
    socket.send(msg);
    appendMessage(msg);

    $('textare').val('');
    return false;

});

socket.on('message', function (data) {
    console.log(data);
    appendMessage(data);
});
