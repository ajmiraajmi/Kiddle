// import AuthContext  from "../../context/AuthContext"
// import { useContext } from "react";
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { loginUser, googleSignIn } = useAuth(); 

 // Handle email and password login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password).then((result) => {
      if (result) {
        console.log(result.user);
        toast.success("login successful!");
        navigate('/');
      }
    });
   
  };
  //const handle googlesignin
  const handleGoogleSignIn =() => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      const currentUser ={
        email: user.email
      }
      console.log(currentUser);
   
    })

  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      <div className="mt-6 flex items-center justify-between">
        <hr className="w-full border-gray-300" />
        <span className="px-2 text-sm text-gray-500">or</span>
        <hr className="w-full border-gray-300" />
      </div>
      <div className="mt-6">
        {/* Placeholder for social login buttons */}
        <button onClick={handleGoogleSignIn} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Login with Google
        </button>
      </div>
      <div className="mt-6 text-center">
        <button
          className="text-sm text-indigo-600 hover:text-indigo-500"
          onClick={() => navigate("/register")}
        >
          Go to Registration Page
        </button>
      </div>
    </div>
  </div>
  )
}

export default Login