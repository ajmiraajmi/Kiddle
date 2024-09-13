import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const toysData = {
  MathToys: [
    {
      id: 1,
      name: 'Counting Blocks',
      price: '$15.99',
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/71vQm1RVPfL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 2,
      name: 'Math Puzzle',
      price: '$12.99',
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LVOldUjf-sMXqQrE0b9lHaDodAdEyPff5Q&s',
    },
  ],
  LanguageToys: [
    {
      id: 3,
      name: 'Word Builder',
      price: '$20.99',
      rating: 4.7,
      image: 'https://i.ebayimg.com/00/s/MTYwMFgxNDI0/z/0pEAAOSwazpdMK-d/$_57.JPG?set_id=8800005007',
    },
    {
      id: 4,
      name: 'Alphabet Blocks',
      price: '$14.99',
      rating: 4.6,
      image: 'https://m.media-amazon.com/images/I/71rGIVP2xwL._AC_SL1500_.jpg',
    },
  ],
  ScienceToys: [
    {
      id: 5,
      name: 'Mini Microscope',
      price: '$25.99',
      rating: 4.9,
      image: 'https://m.media-amazon.com/images/I/612I9tlySJL.jpg',
    },
    {
      id: 6,
      name: 'Physics Kit',
      price: '$18.99',
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/81lk9o+xErL._AC_UF894,1000_QL80_.jpg',
    },
  ],
};

const ToyCard = ({ toy }) => (
<div className="w-1/2 border p-12 rounded-lg shadow-md h-[450px] mx-auto flex flex-col justify-center ">

    <img src={toy.image} alt={toy.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
    <div className="flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-center">{toy.name}</h3>
      <p className="text-black text-xl mb-1 text-center">Price: {toy.price}</p>
      <p className="text-orange-700 text-xl mb-2 text-center">Rating: {toy.rating} / 5</p>
    </div>
    <button className="bg-emerald-800 text-white px-4 py-2 rounded hover:bg-emerald-800 mx-auto">
      View Details
    </button>
  </div>
);

const ShopByCategory = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-emerald-800">Shop by Category</h2>
      
      <Tabs>
        <TabList className="flex justify-center mb-4">
          <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-blue-500 focus:outline-none text-2xl font-bold">
            Math Toys
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-blue-500 focus:outline-none text-2xl font-bold">
            Language Toys
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-blue-500 focus:outline-none text-2xl font-bold">
            Science Toys
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {toysData.MathToys.map((toy) => (
              <ToyCard key={toy.id} toy={toy} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {toysData.LanguageToys.map((toy) => (
              <ToyCard key={toy.id} toy={toy} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {toysData.ScienceToys.map((toy) => (
              <ToyCard key={toy.id} toy={toy} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
