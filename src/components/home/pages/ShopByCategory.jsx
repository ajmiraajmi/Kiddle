import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "@/shared/Container";
import chemistry from "../../../assets/Category/chemistry.jpg";
import counting from "../../../assets/Category/counting.jpg";
import geometry from "../../../assets/Category/geometry.jpg";
import physics from "../../../assets/Category/physics.jpg";
import puzzle from "../../../assets/Category/puzzle.jpg";
import word from "../../../assets/Category/word.png";
import solar from "../../../assets/Category/Solar.jpg";
import Flashcards from "../../../assets/Category/Flashcards.jpg";
import Abacas from "../../../assets/Category/Abacas.jpg";

const toys = {
  mathToys: [
    {
      id: 1,
      name: "Counting Blocks",
      price: "$20",
      rating: 4.5,
      image: counting,
    },
    {
      id: 2,
      name: "Geometry Set",
      price: "$30",
      rating: 4.0,
      image: geometry,
    },
    {
      id: 3,
      name: "Advanced Abacus",
      price: "$22",
      rating: 4.7,
      image: Abacas,
    },
  ],
  languageToys: [
    {
      id: 4,
      name: "Alphabet Puzzle",
      price: "$15",
      rating: 4.3,
      image: puzzle,
    },
    {
      id: 5,
      name: "Word Matching Game",
      price: "$25",
      rating: 4.8,
      image: word,
    },
    {
      id: 6,
      name: "Language Flashcards",
      price: "$18",
      rating: 4.6,
      image: Flashcards,
    },
  ],
  scienceToys: [
    {
      id: 7,
      name: "Chemistry Lab Kit",
      price: "$35",
      rating: 4.7,
      image: chemistry,
    },
    {
      id: 8,
      name: "Physics Building Set",
      price: "$40",
      rating: 4.6,
      image: physics,
    },
    {
      id: 9,
      name: "Solar System Model",
      price: "$28",
      rating: 4.9,
      image: solar,
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {toys.mathToys.map((toy) => (
                <div
                  key={toy.id}
                  className="toy-card p-4 border border-gray-200 rounded shadow-lg w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <img
                    className="w-full h-64 object-cover mb-4 transition-transform duration-300 transform hover:scale-110"
                    src={toy.image}
                    alt={toy.name}
                  />
                  <h3 className="text-2xl font-bold">{toy.name}</h3>
                  <p className="text-xl text-gray-500">{toy.price}</p>
                  <p className="text-xl text-yellow-500">
                    Rating: {toy.rating} ★
                  </p>
                  <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Language Toys Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {toys.languageToys.map((toy) => (
                <div
                  key={toy.id}
                  className="toy-card p-4 border border-gray-200 rounded shadow-lg w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <img
                    className="w-full h-64 object-cover mb-4 transition-transform duration-300 transform hover:scale-110"
                    src={toy.image}
                    alt={toy.name}
                  />
                  <h3 className="text-2xl font-bold">{toy.name}</h3>
                  <p className="text-xl text-gray-500">{toy.price}</p>
                  <p className="text-xl text-yellow-500">
                    Rating: {toy.rating} ★
                  </p>
                  <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Science Toys Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {toys.scienceToys.map((toy) => (
                <div
                  key={toy.id}
                  className="toy-card p-4 border border-gray-200 rounded shadow-lg w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <img
                    className="w-full h-64 object-cover mb-4 transition-transform duration-300 transform hover:scale-110"
                    src={toy.image}
                    alt={toy.name}
                  />
                  <h3 className="text-2xl font-bold">{toy.name}</h3>
                  <p className="text-xl text-gray-500">{toy.price}</p>
                  <p className="text-xl text-yellow-500">
                    Rating: {toy.rating} ★
                  </p>
                  <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                      View Details
                    </button>
                  </div>
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
