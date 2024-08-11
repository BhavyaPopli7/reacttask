import React from 'react';
import logo from "../assets/logo.png";

const MobileHeader = () => {
  return (
    <div className="md:hidden w-full h-[60px] bg-purple-500 flex relative">
        <div className='absolute mt-[10px] ml-[7px]'>
            <img src={logo} alt="Logo" className="h-[40px]" />
        </div>
    </div>
  );
};

export default MobileHeader;
