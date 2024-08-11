import React from 'react'
import Formdata from './Formdata'
import logos from "../assets/Frame 2.png"
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
const Rightloginpage = ({mode,changeTheme}) => {
  return (
    <div className={`w-[422px] h-[730.77px] ml-[149px] mt-[147px]`}>
         <div>
            <p className={`w-[143px] h-[48.3px] text-[36px] font-medium leading-[44px] ${mode? "text-black transition-all duration-500 ease-in-out ":"text-white transition-all duration-500 ease-in-out"} `}>Sign In</p>
            <p className={`w-[176px] h-[20px] leading-[19.2px] font-semibold text-[16px] mt-3  ${mode? "text-black transition-all duration-500 ease-in-out ":"text-white transition-all duration-500 ease-in-out"} `}>Sign in to your account</p>
         </div>

         <div className='flex justify-between mt-[28px]'>
            <div className={`flex text-center justify-center items-center md:w-[197.6px] h-[32.93px] ${mode? "custom-bckformwhite transition-all duration-500 ease-in-out"  : "text-white custom-darkblack transition-all duration-500 ease-in-out"} rounded-lg gap-3`}>
            <FcGoogle />
            <p>Sign in with Google</p> 
            </div>
            <div className={`flex text-center justify-center items-center md:w-[197.6px] h-[32.93px] ${mode? "custom-bckformwhite transition-all duration-500 ease-in-out"  : "text-white custom-darkblack transition-all duration-500 ease-in-out"} rounded-lg gap-3`}>
            <IoLogoApple />
            <p>Sign in with Apple</p>
            </div>
         </div>

         <Formdata mode={mode} changeTheme={changeTheme}></Formdata>

         <div className='flex gap-1 items-center justify-center mt-6 text-[16px]'>
            <p className={`${mode? "text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500 ease-in-out"} `}>Don't have an account?</p>
            <a className=' text-blue-500'>Register here</a>
         </div>

         <div className='flex items-center justify-center mt-[130px]'>
            <img src={logos}></img>
         </div>
    </div>
  )
}

export default Rightloginpage
