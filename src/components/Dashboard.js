import React from 'react'
import Leftslider from './Leftslider'
import Rightdash from './Rightdash'
const Dashboard = ({mode,changeTheme}) => {
  return (
    <div className='flex'>
        <Leftslider mode={mode} changeTheme={changeTheme}></Leftslider>
        <Rightdash mode={mode} changeTheme={changeTheme}></Rightdash>
    </div>
  )
}

export default Dashboard
