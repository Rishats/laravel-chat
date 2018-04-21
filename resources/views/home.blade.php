@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="text-center mt-5">
            <h1>Chats</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="d-flex col-sm-3 mt-sm-5 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Anonymous Chat</h5>
                        <p class="card-text">In this chat you will be private..</p>
                        <a id="anonymousChat" href="{{ url('/anonymous-chat') }}" class="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
            <div class="d-flex col-sm-3 mt-sm-5  mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
            <div class="d-flex col-sm-3 mt-sm-5  mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
            <div class="d-flex col-sm-3 mt-sm-5  mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
