import React from 'react';
import teamImage from '../../assets/team.png';
import { FiPlayCircle } from "react-icons/fi";

export default function TeamSection() {
    return (
      <div className="relative py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Teammate</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 space-y-8 lg:space-y-0">
          <div className="relative lg:w-[550px] w-full flex justify-center">
            <img 
              src={teamImage} 
              alt="Team" 
              className="rounded-lg shadow-lg w-[565px] h-[402px] left-[40px] rounded-tl-[24px]"
            />
          </div>
          <div className="lg:w-1/2 w-full text-left lg:text-left">
            <p className="text-xl opacity-60 mb-4">
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.
            </p>
            <div className="flex justify-center lg:justify-start space-x-5">
              <button className="px-4 py-2 text-white bg-[#377dff] border border-[#377dff] rounded-[32px] flex items-center space-x-2 hover:bg-[white] hover:text-[#377dff]">
                About Us
              </button>
              <button className="px-4 py-2 border text-[#377dff] border-[#377dff] rounded-[32px] flex items-center space-x-2 hover:bg-[#377dff] hover:text-white">
                Our Story 
                <FiPlayCircle size={20} className="ml-1"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }