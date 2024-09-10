import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '@/shared/Container';
import chemistry from "../../../assets/Category/chemistry.jpg";
import counting from "../../../assets/Category/counting.jpg";
import geometry from "../../../assets/Category/geometry.jpg";
import physics from "../../../assets/Category/physics.jpg";
import puzzle from "../../../assets/Category/puzzle.jpg";
import word from "../../../assets/Category/word.png";

const toys = {
  mathToys: [
    {
      id: 1,
      name: 'Counting Blocks',
      price: '$20',
      rating: 4.5,
      image: counting,
    },
    {
      id: 2,
      name: 'Geometry Set',
      price: '$30',
      rating: 4.0,
      image: geometry,
    },
  ],
  languageToys: [
    {
      id: 3,
      name: 'Alphabet Puzzle',
      price: '$15',
      rating: 4.3,
      image: puzzle,
    },
    {
      id: 4,
      name: 'Word Matching Game',
      price: '$25',
      rating: 4.8,
      image: word,
    },
  ],
  scienceToys: [
    {
      id: 5,
      name: 'Chemistry Lab Kit',
      price: '$35',
      rating: 4.7,
      image: chemistry,
    },
    {
      id: 6,
      name: 'Physics Building Set',
      price: '$40',
      rating: 4.6,
      image: physics,
    },
  ],
};

const ShopByCategory = () => {
  return (
    <Container>
      <div className="shop-by-category">
        <h2 className="text-4xl font-bold text-center mb-8 uppercase text-emerald-800">
          Shop by Category
        </h2>
        <Tabs>
          <TabList className="flex justify-center space-x-16 mb-8">
            <Tab className="px-12 py-2 border border-green-800 cursor-pointer bg-black text-white text-2xl focus:outline-none focus:bg-green-600">
              Math Toys
            </Tab>
            <Tab className="px-12 py-2 border border-green-800 cursor-pointer bg-black text-white text-2xl focus:outline-none focus:bg-green-600">
              Language Toys
            </Tab>
            <Tab className="px-12 py-2 border border-green-800 cursor-pointer bg-black text-white text-2xl focus:outline-none focus:bg-green-600">
              Science Toys
            </Tab>
          </TabList>

          {/* Math Toys Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {toys.mathToys.map((toy) => (
                <div
                  key={toy.id}
                  className="toy-card p-4 border border-gray-200 rounded shadow-lg max-w-sm mx-auto"
                >
                  <img
                    className="w-full h-64 object-cover mb-4"
                    src={toy.image}
                    alt={toy.name}
                  />
                  <h3 className="text-xl font-bold">{toy.name}</h3>
                  <p className="text-lg text-gray-500">{toy.price}</p>
                  <p className="text-sm text-yellow-500">Rating: {toy.rating} ★</p>
                  <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Language Toys Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {toys.languageToys.map((toy) => (
                <div
                  key={toy.id}
                  className="toy-card p-4 border border-gray-200 rounded shadow-lg max-w-lg mx-auto"
                >
                  <img
                    className="w-full h-64 object-cover mb-4"
                    src={toy.image}
                    alt={toy.name}
                  />
                  <h3 className="text-xl font-bold">{toy.name}</h3>
                  <p className="text-lg text-gray-500">{toy.price}</p>
                  <p className="text-sm text-yellow-500">Rating: {toy.rating} ★</p>
                  <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Science Toys Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {toys.scienceToys.map((toy) => (
                <div
                  key={toy.id}
                  className="toy-card p-4 border border-gray-200 rounded shadow-lg max-w-lg mx-auto"
                >
                  <img
                    className="w-full h-64 object-cover mb-4"
                    src={toy.image}
                    alt={toy.name}
                  />
                  <h3 className="text-xl font-bold">{toy.name}</h3>
                  <p className="text-lg text-gray-500">{toy.price}</p>
                  <p className="text-sm text-yellow-500">Rating: {toy.rating} ★</p>
                  <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default ShopByCategory;
