@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold text-primary">Daftar Karyawan PT ECOAS</h2>
        <a href="{{ route('employees.create') }}" class="btn btn-success shadow-sm">+ Tambah Karyawan</a>
    </div>

    <div class="card shadow border-0">
        <div class="card-body">
            <table class="table table-hover">
                <thead class="table-light">
                    <tr>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Alamat</th>
                        <th>No. Telp</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($employees as $e)
                    <tr>
                        <td>{{ $e->nama }}</td>
                        <td>{{ $e->umur }} Tahun</td>
                        <td>{{ $e->alamat }}</td>
                        <td>{{ $e->nomor_telp }}</td>
                        <td>
                            <form action="{{ route('employees.destroy', $e->id) }}" method="POST">
                                <a href="{{ route('employees.edit', $e->id) }}" class="btn btn-sm btn-warning">Edit</a>
                                @csrf @method('DELETE')
                                <button class="btn btn-sm btn-danger" onclick="return confirm('Hapus karyawan?')">Hapus</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection