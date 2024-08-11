import React from 'react';
import logo from "../assets/logo.png";
import leftimg from "../assets/gurl.png"
import Button from './Button'

const Leftloginpage = ({ mode, changeTheme }) => {
  return (
    <div className="hidden md:flex w-[704px] h-[976px] custom-gradient-315 mt-[24px] ml-[32px] rounded-2xl relative">
      <div className={`w-[600px] h-[872px] ml-[52px] mt-[52px] ${mode ? "custom-grad2" : "custom-grad"} absolute rounded-2xl`}>
        <img className="mt-[40px] ml-[30px] absolute" src={logo} alt="Logo" />
        <div className="absolute text-white w-[504px] h-[189px] mt-[155px] ml-[30px]">
          <p className="text-[45px] font-lato leading-[63px]">Generate detailed reports with just one click</p>
        </div>
        <img className="absolute w-[381px] h-[438px] mt-[434px] ml-[220px]" src={leftimg} alt="Left Image" />
      </div>
      <div className="absolute mt-[840px] ml-[90px]">
        <Button mode={mode} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default Leftloginpage;
