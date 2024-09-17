import React from 'react';

const WhyChooseUs = () => {
  

  const sections = [
    {
      title: 'Innovative Learning Tools',
      content: 'Our toys are designed to enhance learning through play, incorporating cutting-edge educational technology to ensure your child is always engaged and learning.',
      svg: (
        <svg className="w-24 h-20 text-emerald-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h1v4zm0-6h-1V7h1v3z" />
        </svg>
      )
    },
    {
      title: 'Safe and Quality Materials',
      content: 'We prioritize safety and quality in all our products. Each toy is crafted from non-toxic, eco-friendly materials to ensure a safe learning environment.',
      svg: (
        <svg className="w-24 h-20 text-emerald-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 12h16M4 16h16" />
        </svg>
      )
    },
    {
      title: 'Expertly Curated Selection',
      content: 'Our team of experts carefully selects each toy to provide the best educational value and fun, helping your child develop essential skills through play.',
      svg: (
        <svg className="w-24 h-20 text-emerald-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V4a1 1 0 011-1h6a1 1 0 011 1v3m0 0a4 4 0 00-8 0M12 9v12m0 0a4 4 0 00-4-4m8 0a4 4 0 01-4 4" />
        </svg>
      )
    },
    {
      title: 'Engaging and Interactive',
      content: 'We believe that learning should be fun and interactive. Our toys are designed to stimulate curiosity and creativity, making learning an enjoyable experience.',
      svg: (
        <svg className="w-24 h-20 text-emerald-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7M5 9l7 7 7-7" />
        </svg>
      )
    },
    {
      title: 'Affordable and Accessible',
      content: 'Quality education should be accessible to everyone. We offer a range of products that are both affordable and high-quality, ensuring that every child can benefit from our toys.',
      svg: (
        <svg className="w-24 h-20 text-emerald-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H10z" />
        </svg>
      )
    },
    {
      title: 'Exceptional Customer Service',
      content: 'Our dedicated customer service team is here to support you every step of the way, from product inquiries to post-purchase assistance.',
      svg: (
        <svg className="w-24 h-20 text-emerald-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v8.66l3.5 2.1m4.5-4.24V5.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v4.76L14.5 9.7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-emerald-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => toggleOpen(index)}>
              <div className="flex justify-center mb-4">
                {section.svg}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{section.title}</h3>
              <p className ="">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
