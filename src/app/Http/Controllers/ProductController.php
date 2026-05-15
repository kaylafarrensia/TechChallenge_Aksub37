namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        $products = Product::all();
        return view('products.index', compact('products'));
    }

    public function create(Request $request) {
        $request->validate([
            'category' => 'required',
            'name' => 'required|min:5|max:80',
            'price' => 'required|integer',
            'quantity' => 'required|integer',
            'photo' => 'nullable'
        ]);

        Product::create($request->all());
        return redirect()->route('products.index')->with('success','Product added');
    }

    public function update(Request $request, $id) {
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return redirect()->route('products.index')->with('success','Product updated');
    }

    public function delete($id) {
        Product::destroy($id);
        return redirect()->route('products.index')->with('success','Product deleted');
    }
}
