import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const AllToys = () => {
  const { user} = useAuth();
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);


  useEffect(() => {
    if (user) {
      fetch(`https://kiddle-server.vercel.app/toy`)
      // fetch(`https://kiddle-server.vercel.app/toys/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched toys:", data);
          setToys(data);
        })
        .catch((err) => console.error("Error fetching toys:", err));
    }
  }, [user]);

 
  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-7xl p-12 lg:p-6 mb-2">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-wrap justify-end items-center mb-4"
      >
        <div className="flex flex-wrap items-end w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by toy name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-indigo-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            className="bg-black text-white px-4 py-2.5 rounded-r-md hover:bg-indigo-600"
          >
            Search
          </button>
        </div>
      </form>

      {/* Toys Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border text-sm md:text-lg mb-20">
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
            {filteredToys.length > 0 ? (
              filteredToys.map((toy) => (
                <tr key={toy._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{toy.sellerName || "Unknown"}</td>
                  <td className="py-3 px-4">{toy.name}</td>
                  <td className="py-3 px-4">{toy.subCategory}</td>
                  <td className="py-3 px-4">${toy.price}</td>
                  <td className="py-3 px-4">{toy.quantity}</td>
                  <td className="py-3 px-4">
                    <Link to={`/toy/${toy._id}`}>
                      <button className="bg-emerald-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No toy available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
