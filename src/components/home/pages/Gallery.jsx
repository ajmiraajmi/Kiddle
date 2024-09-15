import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional for a blur effect while loading
import g1 from "../../../assets/gallery/g1.jpg";
import g2 from "../../../assets/gallery/g2.jpg";
import g3 from "../../../assets/gallery/g3.jpg";
import g4 from "../../../assets/gallery/g4.jpg";
import g5 from "../../../assets/gallery/g5.jpg";
import g6 from "../../../assets/gallery/g6.jpg";
import g7 from "../../../assets/gallery/g7.jpg";
// import g8 from "../../../assets/gallery/g8.jpg";
import g9 from "../../../assets/gallery/g9.jpg";
// import g10 from "../../../assets/gallery/g10.jpg";
import Container from '@/shared/Container';

const images = [g1, g2, g3, g4, g5, g6, g7, g9];

const Gallery = () => {
  return (
    <Container>
      <div className="py-12">
        <h2 className="text-5xl font-bold text-center mb-8 text-orange-800 pb-4">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-16">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <LazyLoadImage
                src={img}
                alt={`Gallery item ${index + 1}`}
                className="object-cover w-full h-64 transition-transform duration-100 transform group-hover:scale-110"
                effect="blur" 
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
