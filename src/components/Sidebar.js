import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className="border w-3/12 h-screen">
        <NavLink activeclassname="active" to="/" exact>
          <h2 className="text-2xl py-2 text-center">Home</h2>
        </NavLink>
        <NavLink activeclassname="active" to="/articles" exact>
          <h2 className="text-2xl py-2 mt-4 text-center">Arrticles</h2>
        </NavLink>
        <NavLink activeclassname="active" to="/help">
          <h2 className="text-2xl py-2 mt-4 text-center">Help</h2>
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;
