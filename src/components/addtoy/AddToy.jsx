import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '@/context/AuthContext'; 

const AddToy = () => {
  const { user } = useContext(AuthContext); 
  const [toyData, setToyData] = useState({
    pictureUrl: '',
    name: '',
    sellerName: '',
    sellerEmail: '', 
    userEmail: user?.email || '', 
    subCategory: '',
    price: '',
    rating: '',
    quantity: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToyData({ ...toyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

  
    const toyDataWithEmails = { ...toyData, userEmail: user?.email };

    fetch('https://kiddle-server.vercel.app/toy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toyDataWithEmails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Toy added successfully!');

        // Reset the form
        setToyData({
          pictureUrl: '',
          name: '',
          sellerName: '',
          sellerEmail: '', 
          userEmail: user?.email || '', 
          subCategory: '',
          price: '',
          rating: '',
          quantity: '',
          description: '',
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to add toy!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-12 bg-gray-200 rounded-lg shadow-md mt-10 mb-20">
      <ToastContainer />
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8 text-center text-orange-900">Add A Toy</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Picture URL of the Toy
            </label>
            <input
              type="text"
              name="pictureUrl"
              value={toyData.pictureUrl}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter picture URL"
              required
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={toyData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter toy name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Seller Name
            </label>
            <input
              type="text"
              name="sellerName"
              value={toyData.sellerName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter seller name"
              required
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Seller Email
            </label>
            <input
              type="email"
              name="sellerEmail"
              value={toyData.sellerEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter seller email"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          <div className=''>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={toyData.userEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-white rounded-md"
              placeholder="Enter user email"
              disabled // Disable editing userEmail since it comes from AuthContext
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Sub-Category
            </label>
            <select
              name="subCategory"
              value={toyData.subCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select Sub-Category
              </option>
              <option value="math toy">Math Toy</option>
              <option value="language toy">Language Toy</option>
              <option value="science toy">Science Toy</option>
            </select>
          </div>
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={toyData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter price"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={toyData.rating}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter rating"
              min="1"
              max="5"
              required
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg font-medium text-black mb-2">
              Available Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={toyData.quantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter available quantity"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-base sm:text-lg font-medium text-black mb-2">
            Detail Description
          </label>
          <textarea
            name="description"
            value={toyData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter detailed description"
            rows="4"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-black text-white rounded-md hover:bg-blue-700"
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Adding...' : 'Add Toy'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
