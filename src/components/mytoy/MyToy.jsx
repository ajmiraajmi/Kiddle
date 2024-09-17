import  { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToy =  () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch toys data from your backend
    const fetchToys = async () => {
      try {
        const response = await fetch('http://localhost:5000/toy'); 
        const data = await response.json();
        setToys(data);
      } catch (error) {
        console.error('Error fetching toys:', error);
      }
    };

    fetchToys();
  }, []);

  
  const handleDelete = async (toyId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await fetch(`http://localhost:5000/toy/${toyId}`, {
          method: 'DELETE',
        });
        setToys(toys.filter(toy => toy._id !== toyId));
        Swal.fire('Deleted!', 'Your toy has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting toy:', error);
        Swal.fire('Error!', 'There was an error deleting your toy.', 'error');
      }
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl bg-gray-200 mt-8 mb-12 ">
      <h1 className="text-3xl font-bold mb-6 text-orange-800 text-center">MyToys</h1>

      <table className="min-w-full bg-white border border-gray-300 text-xl">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-left gap-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map(toy => (
            <tr key={toy?._id}>
              <td className="py-2 px-4 border-b">{toy?.name}</td>
              <td className="py-2 px-4 border-b">${toy?.price}</td>
              <td className="py-2 px-4 border-b">{toy?.quantity}</td>
              <td className="py-2 px-4 border-b">{toy?.description}</td>
              <td className="py-2 px-4 border-b flex gap-12">
                <Link to={`/update-toy/${toy?._id}`}>
                <button
                 
                  className="bg-cyan-950 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                </Link>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy