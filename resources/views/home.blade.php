@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="text-center mt-5">
            <h1>Играй и общайся!</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="d-flex col-sm-3 mt-sm-5 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Анонимный чат</h5>
                        <p class="card-text">В данном чате никто не узнает кто ты такой.</p>
                        <a href="{{ url('/anonymous-chat') }}" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
            <div class="d-flex col-sm-3 mt-sm-5  mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
            <div class="d-flex col-sm-3 mt-sm-5  mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
            <div class="d-flex col-sm-3 mt-sm-5  mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
