use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\InvoiceController;

Route::get('/register',[AuthController::class,'showRegister'])->name('register');
Route::post('/register',[AuthController::class,'register']);
Route::get('/login',[AuthController::class,'showLogin'])->name('login');
Route::post('/login',[AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout'])->name('logout');

Route::get('/products',[ProductController::class,'index'])->name('products.index');
Route::post('/products',[ProductController::class,'create'])->middleware('auth');
Route::put('/products/{id}',[ProductController::class,'update'])->middleware('auth');
Route::delete('/products/{id}',[ProductController::class,'delete'])->middleware('auth');

Route::post('/invoice',[InvoiceController::class,'create'])->middleware('auth')->name('invoice.create');
