import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Formdata = ({mode,changeTheme}) => {
  return (
    <div className={`w-[422.64px] h-[347.99px] ${mode? "custom-forwhite transition-all duration-500 ease-in-out text-black": " custom-darkblack transition-all duration-500 ease-in-out"} mt-[20px] rounded-lg`}>
      <form className='ml-[33px]'> 
      <div className='pt-6'>
    <label for="email" className={`text-[16px] ${mode ? "text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500 ease-in-out"}`}>Email address</label>
    <input type="email" id="email"  required className={`w-[356.77px] h-[43.91px] pl-4 rounded-lg mt-[10px] ${mode? "custom-bckformwhite transition-all duration-500 ease-in-out":"cutom-formblack transition-all duration-500 ease-in-out"}`}/>
  </div>
  <div className='mt-[20px]'>
    <label for="password" className={`text-[16px] ${mode ? "text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500 ease-in-out"}`}>Password</label>
    <input type="password" required id="password" className={`w-[356.77px] h-[43.91px] pl-4 rounded-lg mt-[10px] ${mode? "custom-bckformwhite transition-all duration-500 ease-in-out":"cutom-formblack transition-all duration-500 ease-in-out"}`}/>
  </div>

  <p className='mt-[22px] text-blue-500'>Forgot password?</p>
  
  <Link to={"dashboard"}>
  <button className={`w-[356.77px] h-[43.91px] font-semibold custom-burcolor ${mode? "text-black transition-all duration-500 ease-in-out" : "text-white transition-all duration-500"}  rounded-lg mt-6`}>
    Sign In
  </button>
  </Link>

      </form>
    </div>
  )
}

export default Formdata
