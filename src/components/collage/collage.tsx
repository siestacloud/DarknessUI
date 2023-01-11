import React from 'react';
import Slide from './slide';



import { useAppCustomState } from '../../hooks/appHook';




function Collage() {
  
  const AppCustomState = useAppCustomState();
  console.log("TEST",AppCustomState);
  
  return (
    <div className='collage'>
      {AppCustomState.AppCustomState.FrontStudyStages.map((stage, i) => <Slide key={i} studyStageContent={stage} />
       )} 
    </div>

  );
}
export default Collage;

