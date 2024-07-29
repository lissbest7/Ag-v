import React from 'react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <Logo />
      <ul className="flex space-x-16">
        <button  href = "#home" className="text-gray-950 font-bold">Home</button>
        <button href = "#about" className="">About</button>
        <button href = "#services" className="">Services</button>
        <button href = "#projects" className="">Projects</button>
      </ul>
      <Button className="border border-[#377dff]" text= "Contact Us"/> 
    </nav>
  );
};

export default Navbar;