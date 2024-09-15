import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);

  return (
    <div className="container mx-auto p-6 max-w-4xl mt-12 mb-12">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">{toy.name}</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
          <img
            src={toy.pictureUrl}
            alt={toy.name}
            className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0"
          />
          <div className="md:ml-8 text-lg md:text-xl space-y-4">
            <p><strong className="font-semibold">Seller:</strong> {toy.sellerName || 'Unknown'}</p>
            <p><strong className="font-semibold">Sub-category:</strong> {toy.subCategory}</p>
            <p><strong className="font-semibold">Price:</strong> ${toy.price}</p>
            <p><strong className="font-semibold">Available Quantity:</strong> {toy.quantity}</p>
            <p><strong className="font-semibold">Description:</strong> {toy.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
