import React, { useState } from 'react';

const AddToy = () => {
  const [toyData, setToyData] = useState({
    pictureUrl: '',
    name: '',
    sellerName: '',
    sellerEmail: '',
    category: '',
    subCategory: '',
    price: '',
    rating: '',
    quantity: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToyData({ ...toyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toyData);
  };

//   const newToy = {pictureUrl,name,sellerName, sellerEmail , category , category, subCategory, price, rating, quantity, description }
//   console.log(newToy);

fetch('http://localhost:5000/toy', {
    method :'POST',
    headers :{
        'content-type': 'application/json'
    },
    body:JSON.stringify(toyData)

})
.then (res => res.json())
.then(data => {
    console.log(data);
})

  return (
    <div className="max-w-6xl mx-auto p-12 bg-gray-200 rounded-lg shadow-md mt-10 mb-20">
      <h1 className="text-4xl font-semibold mb-8 text-center text-orange-900">Add A Toy</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
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
            <label className="block text-lg font-medium text-black mb-2">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
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
            <label className="block text-lg font-medium text-black mb-2">
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

        {/* Category and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Category
            </label>
            <select
              name="category"
              value={toyData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Math Toys">Math Toys</option>
              <option value="Language Toys">Language Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Sub-Category
            </label>
            <select
              name="category"
              value={toyData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select Sub-Category
              </option>
              <option value="Math Toys">Counting Blocks</option>
              <option value="Math Toys">Math Puzzle</option>
              <option value="Language Toys">Word Builder</option>
              <option value="Language Toys">Alphabet Blocks</option>
              <option value="Science Toys">Mini Microscope</option>
              <option value="Science Toys">Physics Kit</option>
            
            </select>
          </div>
        </div>
        </div>

       
        <div className="grid grid-cols-1">
        <div>
            <label className="block text-lg font-medium text-black mb-2">
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

        {/* Rating and Available Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
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
            <label className="block text-lg font-medium text-black mb-2">
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

        {/* Detail Description */}
        <div className="grid grid-cols-1">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
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
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-32 py-3 bg-black text-white rounded-md hover:bg-blue-700"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
