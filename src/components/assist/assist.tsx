import React from 'react';
import ammoImg from '../../assets/img/army/ammo.jpg';
import ph1Img from '../../assets/img/army/reports/photo_1.jpg';
import ph2Img from '../../assets/img/army/reports/photo_2.jpg';
import ph3Img from '../../assets/img/army/reports/photo_3.jpg';
import ph4Img from '../../assets/img/army/reports/photo_4.jpg';
import ph5Img from '../../assets/img/army/reports/photo_5.jpg';
import ph6Img from '../../assets/img/army/reports/photo_6.jpg';
import ph7Img from '../../assets/img/army/reports/photo_7.jpg';
import ph8Img from '../../assets/img/army/reports/photo_8.jpg';
import ph9Img from '../../assets/img/army/reports/photo_9.jpg';
import ph10Img from '../../assets/img/army/reports/photo_10.jpg';
import logoImg from '../../assets/img/army/logo/logo_white.png';


import Title from '../title/title';

function Assist() {
  

  return (

    <section className='assist  '  id='assist'>
      <div className='assist__wrapper white'>
      <Title title='Наши результаты' img={logoImg} desc='Максимальная поддержка - Абсолютная открытость - Гарантированная помощь'/>
        
        <ul className='assist__content' id='#assist'>
          <li className='assist__item ' style={{ backgroundImage: `url(${ph7Img})` }}  >
          <a href='https://t.me/vpervieruki' target='_blank' className='assist__item_hide'>Посмотреть отчет</a>
          </li>
          <li className='assist__item'  style={{ backgroundImage: `url(${ph9Img})` }}>
            <a href='https://t.me/vpervieruki' target='_blank' className='assist__item_hide'>Посмотреть отчет</a>
          </li>
          <li className='assist__item' style={{ backgroundImage: `url(${ph3Img})` }}>
            <a href='https://t.me/vpervieruki' target='_blank' className='assist__item_hide'>Посмотреть отчет</a>
          </li>
          <li className='assist__item' style={{ backgroundImage: `url(${ph1Img})` }}>
            <a href='https://t.me/vpervieruki' target='_blank' className='assist__item_hide'>Посмотреть отчет</a>
          </li>
          <li className='assist__item' style={{ backgroundImage: `url(${ph6Img})` }}>
            <a href='https://t.me/vpervieruki' target='_blank' className='assist__item_hide'>Посмотреть отчет</a>
          </li>
          <li className='assist__item' style={{ backgroundImage: `url(${ph10Img})` }}>
            <a href='https://t.me/vpervieruki' target='_blank' className='assist__item_hide'>Посмотреть отчет</a>

          </li>
        </ul>
      </div>

    </section>

  );
}

export default Assist;
