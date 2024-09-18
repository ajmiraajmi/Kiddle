import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '@/context/AuthContext'; // Make sure the path is correct

const MyToy = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const [toys, setToys] = useState([]);
  const [sortBy, setSortBy] = useState('asc');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    if (user) {
      setUserEmail(user.email); // Set userEmail from context
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchToys = async () => {
      if (userEmail) {
        try {
          const response = await fetch(`http://localhost:5000/toys/${userEmail}`);
          const data = await response.json();
          setToys(data);
        } catch (error) {
          console.error('Error fetching toys:', error);
        }
      }
    };

    fetchToys();
  }, [userEmail]);

  const sortedToys = [...toys].sort((a, b) => {
    if (sortBy === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

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
        setToys(toys.filter((toy) => toy._id !== toyId));
        Swal.fire('Deleted!', 'Your toy has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting toy:', error);
        Swal.fire('Error!', 'There was an error deleting your toy.', 'error');
      }
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto p-4 max-w-7xl bg-gray-200 mt-8 mb-12">
        <p className="text-center text-lg font-semibold">
          You need to be logged in to view this page. <Link to="/login" className="text-blue-500 underline">Login here</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl bg-gray-200 mt-8 mb-12">
      <h1 className="text-4xl sm:text-3xl font-bold mb-6 text-orange-800 text-center">My Toys</h1>
      
      {/* Dropdown for sorting */}
      <div className="mb-4 text-right">
        <label htmlFor="sort" className="mr-2 text-sm sm:text-lg font-bold">Sort by Price:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-2 sm:px-4 text-left">Name</th>
              <th className="py-2 px-2 sm:px-4 text-left">Price</th>
              <th className="py-2 px-2 sm:px-4 text-left">Quantity</th>
              <th className="py-2 px-2 sm:px-4 text-left">Description</th>
              <th className="py-2 px-2 sm:px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedToys.map((toy) => (
              <tr key={toy._id}>
                <td className="py-2 px-2 sm:px-4 border-b">{toy.name}</td>
                <td className="py-2 px-2 sm:px-4 border-b">${toy.price}</td>
                <td className="py-2 px-2 sm:px-4 border-b">{toy.quantity}</td>
                <td className="py-2 px-2 sm:px-4 border-b">{toy.description}</td>
                <td className="py-2 px-2 sm:px-4 border-b flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <Link to={`/update-toy/${toy._id}`}>
                    <button className="bg-cyan-950 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
