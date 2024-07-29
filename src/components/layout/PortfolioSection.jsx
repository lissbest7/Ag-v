import React from 'react';
import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';

export default function PortfolioSection() {
  return (
    <div className="py-16 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">What do we do</h2>
      <p className="text-xl opacity-60 mb-16">
        All projects that we have already done, proven can help you use more comfortable, then can use by client from our business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="relative left-52">
          <img src={portfolio1} alt="Design Byte App" className="rounded-tl-[30px] w-[350px] h-[350px] mx-auto object-cover" />
          <div className="absolute bottom-9 left-28 text-white p-4">
            <h3 className="text-lg font-bold bg-opacity-70 px-2 py-5 rounded">Design Byte App</h3>
          </div>
        </div>
        <div className="relative">
          <img src={portfolio2} alt="Cloud App" className="rounded-tl-[30px] w-[400px] h-[400px] mx-auto object-cover" />
          <div className="absolute bottom-3 left-28 text-white p-3">
            <h3 className="text-lg font-bold bg-opacity-70  px-2 py-1 rounded">Cloud App</h3>
          </div>
        </div>
        <div className="relative right-52">
          <img src={portfolio3} alt="Design Furniture App" className="rounded-tl-[30px] w-[350px] h-[350px] mx-auto object-cover" />
          <div className="absolute bottom-9 left-28 text-white p-4">
            <h3 className="text-lg font-bold bg-opacity-70  px-2 py-5 rounded">Design Furniture App</h3>
          </div>
        </div>
      </div>
      <button className="mt-16 px-6 py-2 border text-[#377dff] border-[#377dff] rounded-3xl hover:bg-[#377dff] hover:text-white transition-colors duration-300">See All Portfolio</button>
    </div>
  );
}