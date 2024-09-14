import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock user authentication status
  const isAuthenticated = false; // Replace with your real authentication check

  // Fetch toys from the API
  useEffect(() => {
    fetch("http://localhost:5000/toy?limit=20") // Fetching 20 results by default
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.error("Error fetching toys:", err));
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetch(`http://localhost:5000/toy?name=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => setToys(data))
        .catch((err) => console.error("Error searching toys:", err));
    }
  };

  const handleViewDetails = (toyId) => {
    if (!isAuthenticated) {
      // Redirect to login page with the intended redirect path
      navigate("/login", { state: { from: `/toy/:id` } });
    } else {
      navigate(`/toy/${toyId}`);
    }
  };

  return (
    <div className="container mx-auto p-6 mb-2">
      {/* Centered Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by toy name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-20 py-2 border border-indigo-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2.5 rounded-r-md hover:bg-indigo-600"
          >
            Search
          </button>
        </div>
      </form>
      {/* Toys Table */}
      <table className="min-w-full bg-white border text-xl mb-20">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left py-3 px-4">Seller</th>
            <th className="text-left py-3 px-4">Toy Name</th>
            <th className="text-left py-3 px-4">Sub-category</th>
            <th className="text-left py-3 px-4">Price</th>
            <th className="text-left py-3 px-4">Available Quantity</th>
            <th className="text-left py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{toy.sellerName || "Unknown"}</td>
              <td className="py-3 px-4">{toy.name}</td>
              <td className="py-3 px-4">{toy.subCategory}</td>
              <td className="py-3 px-4">${toy.price}</td>
              <td className="py-3 px-4">{toy.quantity}</td>
              <td className="py-3 px-4">
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleViewDetails(toy._id)}
                    className="bg-emerald-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
