import React from 'react';
import ts from '../../assets/img/ico/ts.png';
import { frontStudy } from '../../models/stateApp';


interface imgProps {
  studyStageContent: frontStudy
}

function Slide({ studyStageContent }: imgProps) {

  const [SlideState, setSlideState] = React.useState(false)
  const HandleIncreaseSize = () => {
    setSlideState(!SlideState)
  }


  return (

      <div className={`slide ${SlideState ? 'active' : ''}`} onClick={HandleIncreaseSize} style={{ backgroundImage: `url(${studyStageContent.preview})` }}>
        <div className='b'></div>
        <div className='slide__content content'>
          <h4 className='content__date'> {studyStageContent.date} </h4>
          <h3 className='content__head'> {studyStageContent.projectTitle} </h3>
          <h5 className='content__desc'>{studyStageContent.desc}</h5>
          <ul className='content__stack stack'>
            {studyStageContent.stack.map((tech, i) => <li key={i}  ><img className='stack__link' src={tech} alt="" />
              {/* <span className='stack__number'>0</span> */}
            </li>)}
          </ul>
          <a className='content__source' target='_blank' href={studyStageContent.sourceUrl}> Узнать подробнее! </a>
        </div>
      </div>
    
  );
}

export default Slide;
