import  { useState} from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
  const toy = useLoaderData(); 
  const { _id, price, quantity, description } = toy;
  const navigate=useNavigate();

  // State to hold updated toy data
  const [toyData, setToyData] = useState({
    price: price || '',
    availableQuantity: quantity || '',
    detailDescription: description || '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setToyData({
      ...toyData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/toy/${_id}`, {
      method: 'PATCH', // Make sure the method is PATCH
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: toyData.price,
        quantity: toyData.availableQuantity,
        description: toyData.detailDescription,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // If update is successful
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Toy information updated successfully!',
          });
          navigate('/my-toys')
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-emerald-900">Update Toy Information</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={toyData.price}
              onChange={handleChange}
              className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Available Quantity</label>
            <input
              type="number"
              name="availableQuantity"
              value={toyData.availableQuantity}
              onChange={handleChange}
              className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Detail Description</label>
            <textarea
              name="detailDescription"
              value={toyData.detailDescription}
              onChange={handleChange}
              className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Update Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
