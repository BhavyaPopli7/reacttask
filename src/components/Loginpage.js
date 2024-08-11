import React from 'react';
import Leftloginpage from './Leftloginpage';
import Rightloginpage from './Rightloginpage';
import MobileHeader from './MobileHeader';

const Loginpage = ({ mode, changeTheme }) => {
  return (
    <div>
      <MobileHeader />
      <div className="flex flex-col md:flex-row">
        <Leftloginpage mode={mode} changeTheme={changeTheme} />
        <Rightloginpage mode={mode} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default Loginpage;