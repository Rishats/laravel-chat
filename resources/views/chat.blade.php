@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Online Chat</div>

                    <div class="panel-override-body">
                        @if (session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif
                            <form>
                                <ul class="chat"></ul>
                                <hr>
                                <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
                                <hr>
                                <input class="button" type="submit" value="Send Message">
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    @guest
    @else
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
        <script src="{{ asset('js/client.js') }}"></script>
    @endguest
@endsection