import React from 'react';
import  NavUIMenu  from "../components/navuimenu/navuimenu";
import  AsideUIContent  from "../components/asidecontent/asideuicontent";

function UIPageOne() {
  return (
    <div className='container'>
      <NavUIMenu />
      <AsideUIContent />
    </div>
  );
}

export default UIPageOne;
