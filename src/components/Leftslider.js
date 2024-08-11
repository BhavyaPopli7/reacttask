import React, { useState } from 'react';
import logo from "../assets/dashlogo.png";
import toplogo from "../assets/table.png";
import cal from "../assets/Calendar.png";
import dash from "../assets/dash.png";
import inv from "../assets/inv.png";
import notif from "../assets/Notification.png";
import setting from "../assets/Setting2.png";
import upl from "../assets/upl.png";
import schedule from "../assets/schedule.png";





import Button from "./Button"

const Leftslider = ({mode,changeTheme}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-[1024px] ${mode?"bg-[#FFFFFF] ":"custom-darkblack"}  transition-width duration-300  ${
        isCollapsed ? 'w-[154px]' : 'w-[285px]'
      }`}
    >
      <div className='flex items-center justify-around pt-[51px]'>
        <div className='flex justify-center items-center gap-4'>
          <img  src={logo} alt="Logo" />
          {!isCollapsed && (
            <p className='text-white font-semibold text-[24px]'>Base</p>
          )}
        </div>
        <div>
          <img
            className='cursor-pointer'
            src={toplogo}
            alt="Toggle"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      <div className='flex-col mt-[40px]'>
        <div className='flex mt-10 gap-3 pl-[31px] w-full h-[48px] items-center'>
          <img className='h-[20px] w-[20px]' src={dash} alt="Dashboard" />
          {!isCollapsed && (
            <p className='text-gray-500 font-semibold text-[16px]'>Dashboard</p>
          )}
        </div>

        <div
          className='flex mt-2 gap-3 pl-[31px] w-full h-[48px] items-center'
          style={{
            background:
              'linear-gradient(90deg, rgba(172, 169, 255, 0.25) 0%, rgba(172, 169, 255, 0) 91.25%)',
          }}
        >
          <img className='h-[20px] w-[20px]' src={upl} alt="Upload" />
          {!isCollapsed && (
            <p className='font-semibold text-[16px] text-[#605BFF]'>Upload</p>
          )}
        </div>

        <div className='flex gap-3 mt-5 pl-[31px] w-full h-[48px] items-center'>
          <img className='h-[20px] w-[20px]' src={inv} alt="Invoice" />
          {!isCollapsed && (
            <p className='text-gray-500 font-semibold text-[16px]'>Invoice</p>
          )}
        </div>

        <div className='flex gap-3 mt-3 pl-[31px] w-full h-[48px] items-center'>
          <img className={`h-[20px] w-[20px]' `} src={schedule} alt="Schedule" />
          {!isCollapsed && (
            <p className='text-gray-500 font-semibold text-[16px]'>Schedule</p>
          )}
        </div>

        <div className='flex gap-3 mt-3 pl-[31px] w-full h-[48px] items-center'>
          <img className='h-[20px] w-[20px]' src={cal} alt="Calendar" />
          {!isCollapsed && (
            <p className='text-gray-500 font-semibold text-[16px]'>Calendar</p>
          )}
        </div>

        <div className='flex gap-3 mt-3 pl-[31px] w-full h-[48px] items-center'>
          <img className='h-[20px] w-[20px]' src={notif} alt="Notification" />
          {!isCollapsed && (
            <p className='text-gray-500 font-semibold text-[16px]'>Notification</p>
          )}
        </div>

        <div className='flex gap-3 mt-3 pl-[31px] w-full h-[48px] items-center'>
          <img className='h-[20px] w-[20px]' src={setting} alt="Settings" />
          {!isCollapsed && (
            <p className='text-gray-500 font-semibold text-[16px]'>Settings</p>
          )}
        </div>


         <div className='ml-[35px] mt-[385px]'>
           <Button mode={mode} changeTheme={changeTheme}></Button>
         </div>
        
      </div>


    </div>
  );
};

export default Leftslider;
