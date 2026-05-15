namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = ['invoice_number','items','shipping_address','postal_code','total_price','user_id'];
    protected $casts = ['items' => 'array'];
}
