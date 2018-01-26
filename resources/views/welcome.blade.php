<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Socket io app</title>
</head>
<body>
    <form>
        <ul class="chat"></ul>
        <hr>
        <textarea style="width:100%; height: 50px;"></textarea>
        <input type="submit" value="Отправить">
    </form>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
    <script>
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

    </script>

</body>
</html>