import React from 'react';
import collabImage1 from '../../assets/collabimage1.png'; 
import collabImage2 from '../../assets/collabimage2.png'; 

export default function CollaborationSection() {
  return (
    <div className="py-16 bg-white flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16">
      <div className="lg:w-[40%] text-left mb-8 lg:mb-0 ml-44">
        <h2 className="text-4xl font-bold mb-4 w-96">
          Interesting Collaboration With Us?
        </h2>
        <p className="text-base opacity-60 mb-4">
          Help you to reach your business goal
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
      </div>
      <div className="lg:w-[50%] flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
        <div className=" w-full lg:w-[35%] lg:mt-24">
          <img src={collabImage1} alt="Collaboration 1" className="w-full h-auto rounded-lg shadow-lg object-cover" />
        </div>
        <div className=" w-full lg:w-[38%] lg:mb-24">
          <img src={collabImage2} alt="Collaboration 2" className="w-full h-auto rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </div>
  );
}