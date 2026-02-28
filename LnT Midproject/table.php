public function up()
{
    Schema::create('employees', function (Blueprint $table) {
        $table->id();
        $table->string('nama');
        $table->integer('umur'); 
        $table->string('alamat');
        $table->string('nomor_telp');
        $table->timestamps();
    });
}