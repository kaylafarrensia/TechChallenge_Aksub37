@extends('layouts.app')

@section('content')
<h2>Product Catalog</h2>
<div class="row">
    @foreach($products as $product)
        <div>
            <img src="{{ $product->photo }}" alt="{{ $product->name }}" width="100">
            <h4>{{ $product->name }}</h4>
            <p>Rp. {{ $product->price }}</p>
            <p>Stock: {{ $product->quantity }}</p>
            <form method="POST" action="{{ route('invoice.create') }}">
                @csrf
                <input type="hidden" name="products[{{ $product->id }}]"