import React from 'react';
import  NavUIMenu  from "../components/navmenu/navmenu";
import  AsideUIContent  from "../components/asidecontent/asidecontent";

function UIPageOne() {
  return (
    <div className='container'>
      <NavUIMenu />
      <AsideUIContent />
    </div>
  );
}

export default UIPageOne;
