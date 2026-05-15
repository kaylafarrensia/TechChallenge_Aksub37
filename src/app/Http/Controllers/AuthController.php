namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function showRegister() {
        return view('auth.register');
    }

    public function register(Request $request) {
        $request->validate([
            'full_name' => 'required|min:3|max:40',
            'email' => 'required|email|regex:/@gmail\.com$/|unique:users',
            'password' => 'required|min:6|max:12',
            'phone' => 'required|regex:/^08/'
        ]);

        User::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone
        ]);

        return redirect()->route('login')->with('success','User registered');
    }

    public function showLogin() {
        return view('auth.login');
    }

    public function login(Request $request) {
        if(Auth::attempt($request->only('email','password'))){
            return redirect()->route('products.index');
        }
        return back()->withErrors(['Invalid credentials']);
    }

    public function logout() {
        Auth::logout();
        return redirect()->route('login');
    }
}
