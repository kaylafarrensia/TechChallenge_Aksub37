public function store(Request $request)
{
    $request->validate([
        'nama' => 'required|min:5|max:20', 
        'umur' => 'required|integer|min:21',
        'alamat' => 'required|min:10|max:40',
        'nomor_telp' => 'required|regex:/^08/|digits_between:9,12',
    ]);

    Employee::create($request->all());
    return redirect()->route('employees.index')->with('success', 'Karyawan berhasil ditambahkan!');
}