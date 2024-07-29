import React from 'react';
import Button from "../ui/Button";
import { FaStar } from "react-icons/fa";
import hero from '../../assets/Hero.png';

export default function HeroSection() {
  return (
    <div className='flex items-center flex-col'>
      <div className="max-w-[750px] text-center">
        <h1 className='font-extrabold text-[64px]'>
          Make your dream business goal come true
        </h1>
        <p className='text-xl opacity-40 mt-4'>
          When you need us to improve your business,
          then come with us to help your business have reach it,
          you just sit and feel that goal.
        </p>
        <Button className="border-[#377dff] mt-8" text="Start Project" />
      </div>
      <div className='py-16 relative'>
        <img src={hero} className='max-w-full h-auto rounded-lg shadow-lg'/>
        <div className="bg-white shadow-lg absolute flex flex-col gap-2 py-4 px-5 w-fit rounded-2xl top-24 -left-20">    
          <p className='flex gap-1 text-xs items-center'>
            <FaStar size={24} className="text-[#f8bd38]" />
            Great Project
          </p>
          <h1 className='font-bold text-lg'>800+ Done</h1>
        </div>
        <div className="absolute bottom-0 -right-32 mb-4 mr-4 px-5 py-6 bg-white rounded-2xl shadow-lg w-fit flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-white">
              B
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className='font-bold'>Bill Adams</h1>
              <p className='text-sm opacity-70'>CEO UpTech</p>
            </div>
          </div>
          <p className='max-w-[250px] text-sm'>
            “This team is really the best in its field. I don't regret working with them, and will come back again. Thanks.“
          </p>
        </div>
      </div>
    </div>
  );
}