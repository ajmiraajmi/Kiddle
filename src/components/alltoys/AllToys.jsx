import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch toy data from your API endpoint with limit=20
    fetch('/api/toys?limit=20')  // Adjust the API endpoint as per your setup
      .then(res => res.json())
      .then(data => setToys(data))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (toyId) => {
    const isLoggedIn = localStorage.getItem('authToken');  // Check if user is logged in
    if (!isLoggedIn) {
      navigate('/login', { state: { from: `/toys/${toyId}` } });  // Redirect to login with back link
    } else {
      navigate(`/toys/${toyId}`);  // Redirect to the toy details page
    }
  };
  return (
    <div className="container mx-auto p-6">
    <h1 className="text-2xl font-bold mb-4">All Toys</h1>
    
    {/* Search bar */}
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Search by Toy Name" 
        value={searchTerm} 
        onChange={handleSearch} 
        className="px-4 py-2 border rounded w-full"
      />
    </div>

    {/* Table to display toys */}
    <table className="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b-2">Seller</th>
          <th className="px-6 py-3 border-b-2">Toy Name</th>
          <th className="px-6 py-3 border-b-2">Sub-category</th>
          <th className="px-6 py-3 border-b-2">Price</th>
          <th className="px-6 py-3 border-b-2">Available Quantity</th>
          <th className="px-6 py-3 border-b-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {toys
          .filter(toy => 
            toy.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(toy => (
            <tr key={toy.id}>
              <td className="px-6 py-4 border-b">{toy.seller || 'Unknown'}</td>
              <td className="px-6 py-4 border-b">{toy.name}</td>
              <td className="px-6 py-4 border-b">{toy.subcategory}</td>
              <td className="px-6 py-4 border-b">${toy.price}</td>
              <td className="px-6 py-4 border-b">{toy.quantity}</td>
              <td className="px-6 py-4 border-b">
                <button 
                  onClick={() => handleViewDetails(toy.id)} 
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View Details
                </button>
              </td>
            </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AllToys