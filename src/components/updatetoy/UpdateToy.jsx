import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
  const { toyId } = useParams(); // Get the toyId from URL params
  const navigate = useNavigate();
  
  // State to hold toy data
  const [toyData, setToyData] = useState({
    price: '',
    availableQuantity: '',
    detailDescription: '',
    status: ''
  });

  // Fetch toy data to pre-populate the form
  useEffect(() => {
    fetch(`http://localhost:5000/toy/${toyId}`)
      .then((response) => response.json())
      .then((data) => setToyData(data))
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to load toy data',
        });
      });
  }, [toyId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setToyData({
      ...toyData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/toy/${toyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toyData),
    })
      .then((response) => response.json())
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Toy information updated successfully!',
        }).then(() => {
          navigate('/toy'); 
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update toy information',
        });
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update Toy Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={toyData.price}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Available Quantity</label>
          <input
            type="number"
            name="availableQuantity"
            value={toyData.availableQuantity}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Detail Description</label>
          <textarea
            name="detailDescription"
            value={toyData.detailDescription}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Status</label>
          <input
            type="text"
            name="status"
            value={toyData.status}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Toy
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
