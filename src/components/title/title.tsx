import React from 'react';



import { useAppCustomState } from '../../hooks/appHook';


interface dataProps {
  title: string
  desc: string
  img: string
}



function Title({ title, desc, img }: dataProps) {

  const AppCustomState = useAppCustomState();
  console.log("TEST", img);

  return (
    <>
      <div className='logo' id='about' style={{ backgroundImage: `url(${img})` }} />
      <p className='title' >{title}</p>
      <p className='subtitle'>{desc}</p>
    </>

  );
}
export default Title;

