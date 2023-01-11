import React from 'react';
import Collage from './collage/collage';
import logoImg from '../assets/img/army/logo/logo_white.png';
import Title from './title/title';
function StudyMe() {
  return (
    <section className='study'>
      <div className='study__wrapper white' id='study'>
      <Title title='Галлерея' img={logoImg} desc='Основные события прошедших месяцев, детальные отчеты можно найти в нашем телеграм сообществе.'/>
        <Collage />
      </div>
    </section>
  );
}
export default StudyMe;

