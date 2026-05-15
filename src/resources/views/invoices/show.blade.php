@extends('layouts.app')

@section('content')
<h2>Invoice</h2>

<p><strong>Invoice Number:</strong> {{ $invoice->invoice_number }}</p>
<p><strong>Shipping Address:</strong> {{ $invoice->shipping_address }}</p>
<p><strong>Postal Code:</strong> {{ $invoice->postal_code }}</p>

<table border="1" cellpadding="10" cellspacing="0">
    <thead>
        <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
    </thead>
    <tbody>
        @foreach($invoice->items as $item)
            <tr>
                <td>{{ $item['productName'] }}</td>
                <td>{{ $item['quantity'] }}</td>
                <td>Rp. {{ $item['subtotal'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>

<h3>Total: Rp. {{ $invoice->total_price }}</h3>
@endsection
