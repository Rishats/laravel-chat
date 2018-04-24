@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-md-offset-2 mt-5">
                <div class="card mb-5">
                    <div class="card-body">
                        <div class="card-text">
                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <chat_status_component></chat_status_component>
                            <ul class="chat">
                                @foreach ($last_messages as $msg)
                                    <li class="user_login">{{ $msg->socket_id }} <span class="user_message_time">[{{ $msg->created_at}}]</span></li>
                                    <li class="user_message">{{ $msg->message }}</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card mb-5">
                    <div class="card-body">
                        <div class="card-text">
                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <div class="current_online"></div>
                            <chat_message_form_component></chat_message_form_component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script src="{{ asset('js/chat/client.js') }}"></script>
@endsection