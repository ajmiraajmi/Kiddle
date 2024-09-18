import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
  
    createUser(email, password)
      .then((result) => {
        console.log("Create User Result:", result); // Log the result
        const { user } = result;
        const newUser = {
          email: user.email,
          name: formData.name,
        };
  
        fetch('http://localhost:5000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
        .then((res) => {
          console.log("Fetch Response Status:", res.status); // Log the response status
          return res.json();
        })
        .then((data) => {
          console.log("Fetch Response Data:", data); // Log the response data
          if (data.insertedId) {
            console.log('User added to the database');
            toast.success("Registration successful!");
          } else {
            toast.error("Failed to save user data. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Fetch Error:", error); // Log the fetch error
          toast.error("Failed to save user data. Please try again.");
        });
      })
      .catch((error) => {
        console.error("Create User Error:", error); // Log the createUser error
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300"
              placeholder="******"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
          <p className="mt-4 text-center">
            Already have an account?
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterPage;
