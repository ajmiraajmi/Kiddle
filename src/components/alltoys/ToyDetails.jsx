import { useLoaderData } from "react-router-dom";




const ToyDetails = () => {
    const toy = useLoaderData();
  
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{toy.name}</h2>
      <img src={toy.imageURL} alt={toy.name} className="mb-4" />
      <p><strong>Seller:</strong> {toy.sellerName || 'Unknown'}</p>
      <p><strong>Sub-category:</strong> {toy.subCategory}</p>
      <p><strong>Price:</strong> ${toy.price}</p>
      <p><strong>Available Quantity:</strong> {toy.quantity}</p>
      <p><strong>Description:</strong> {toy.description}</p>
    </div>
  );
};

export default ToyDetails;
