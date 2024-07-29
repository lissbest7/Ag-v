import React from 'react';

const Button = ({ text , className}) => {
  return (
    <button className={`py-3 px-[50px] rounded-3xl text-[#377dff] font-bold hover:bg-[#377dff]  hover:text-white ${className}`}>
      {text}
    </button>
  );
};

export default Button;