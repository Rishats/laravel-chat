# Simple chats with Laravel
In this repo you can see simple chats.
1) Chat with socket.io - Node[Redis,MySQL] - backend. Frontend: Vue JS.
1) Chat with Broadcasting[Pusher]. Frontend: Vue JS.
## Install
1)
```
git@github.com:Rishats/laravel-chat.git
```
2)
```
composer install
```
3)
```
php artisan key:generate
```
4)
Configure .env
```
cp .env.example .env
```
5)
```
php artisan migrate
```
6)
```
npm install
```
7)
You should run server.js via node. Node server use .env too.
```
node node_server/server.js
```
8) 
resources/assets/js/bootstrap.js
```
window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'your-pusher-key',
    cluster: 'ap2',
    encrypted: true
});
```
9)
If you configure all .env correctly, you can run web page and sign up then use all chats.
## Use tests
You can run tests via Dusk and phpunit
1) vendor/bin/phpunit
2) php artisan dusk

Use .env.testing for tests - phpunit
Use .env.dusk.local for tests - Dusk
```
php artisan config:cache --env=testing

php artisan migrate --database testing
```



