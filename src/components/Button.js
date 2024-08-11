import React from 'react'
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
const Button = ({mode, changeTheme }) => {
  return (
    <button onClick={changeTheme}>
          <div className={`w-[76px] h-[40px] rounded-3xl flex gap-2 ${mode?" custom-btnwhite transition-all duration-500 ease-in-out" : "custom-btnback transition-all duration-500 ease-in-out"}  justify-center items-center cursor-pointer`}>

          <div className={` w-[31px] h-[31px] rounded-full ${mode ? "custom-forwhite transition-all duration-500 ease-in-out" : "text-white"} flex justify-center items-center`}>
                 <FiSun  className="w-[20px] h-[20px]"/>
                 </div>

        <div className={` w-[31px] h-[31px] rounded-full ${mode ? " " : "text-white cutom-formblack transition-all duration-500 ease-in-out"} flex justify-center items-center`}>
                 <IoMoonOutline  className="w-[20px] h-[20px]"/>
                 </div>
          </div>
    </button>  
  )
}

export default Button
 