namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Support\Str;

class InvoiceController extends Controller
{
    public function create(Request $request) {
        $items = [];
        $total = 0;

        foreach($request->products as $productId => $qty){
            $product = Product::findOrFail($productId);
            if($product->quantity < $qty){
                return back()->withErrors(['Barang sudah habis, silakan tunggu restock']);
            }
            $subtotal = $product->price * $qty;
            $items[] = ['productName'=>$product->name,'quantity'=>$qty,'subtotal'=>$subtotal];
            $total += $subtotal;
        }

        $invoice = Invoice::create([
            'invoice_number' => Str::uuid(),
            'items' => $items,
            'shipping_address' => $request->shipping_address,
            'postal_code' => $request->postal_code,
            'total_price' => $total,
            'user_id' => auth()->id()
        ]);

        return view('invoices.show', compact('invoice'));
    }
}
