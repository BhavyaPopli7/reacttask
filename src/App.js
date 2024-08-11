import { useEffect, useState } from 'react';
import './App.css';
import {Route, Routes } from "react-router-dom";
import Loginpage from './components/Loginpage';
import Dashboard from './components/Dashboard';

function App() {
    
   const [mode,setMode] = useState(false);

   const changeTheme = ()=>{
    setMode(!mode);
   }
  
  return (
    <div className={`w-[1440px] h-[1024px] top-[405px] left-[235px] ${mode ? "custom-white transition-all duration-500 ease-in-out" : "custom-black transition-all duration-500 ease-in-out"}`}>
     
       <Routes>
           <Route path="/" element={ <Loginpage mode={mode} changeTheme={changeTheme}></Loginpage>}></Route>
           <Route path="dashboard" element={<Dashboard mode={mode} changeTheme={changeTheme}></Dashboard>}></Route>
       </Routes>
    </div>
  );
}

export default App;
