<!DOCTYPE html>
<html>
<head>
    <title>LnT Final Project</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <nav>
        <a href="{{ route('products.index') }}">Products</a>
        @auth
            <form action="{{ route('logout') }}" method="POST">@csrf<button>Logout</button></form>
        @endauth
    </nav>
    <div class="container">
        @yield('content')
    </div>
</body>
</html>
