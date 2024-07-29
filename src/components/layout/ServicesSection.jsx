import React from 'react';
import {FaSearch, FaPaintBrush, FaTv } from 'react-icons/fa';

export default function ServicesSection() {
  return (
    <div className="left-4 py-12 flex flex-col lg:flex-row items-center  text-left bg-white ml-56">
      <div className="lg:w-[30%] px-12">
        <h2 className="text-blue-600 text-lg font-bold mb-2">Our Services</h2>
        <h3 className="text-3xl font-bold mb-4">Perfect and Fast Movement</h3>
        <p className="text-base opacity-60 mb-4">
          We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. Make your content look interesting and make people look for your business.
        </p>
        <a href="#readmore" className="text-blue-600 text-base font-semibold flex items-center">
          Read more
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 15.293a1 1 0 010-1.414L13.586 10 10.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a 1 1 0 01-1.414 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M6 10a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 mt-8 lg:mt-0">
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <FaTv className="text-blue-600 mb-2" size={50} />
          <h4 className="text-base font-semibold">Social Media Management</h4>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <FaSearch className="text-red-600 mb-2" size={50} />
          <h4 className="text-base font-semibold">Search Engine Optimization</h4>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <FaPaintBrush className="text-green-600 mb-2" size={50} />
          <h4 className="text-base font-semibold">Design</h4>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <FaTv className="text-yellow-600 mb-2" size={50} />
          <h4 className="text-base font-semibold">Ads</h4>
        </div>
      </div>
    </div>
  );
}