import React from 'react';
import communities from '../assets/img/army/service/communities.png';
import growth from '../assets/img/army/service/growth.png';
import hands from '../assets/img/army/service/hands.png';
import handshake from '../assets/img/army/service/handshake.png';
import health from '../assets/img/army/service/health.png';
import militar from '../assets/img/army/service/militar.png';
import united from '../assets/img/army/service/united.png';

import Title from './title/title';
import logoImg from '../assets/img/army/logo/logo.png';

function ServiceMe() {


  return (

    <div className='m-border-shadow-top'>

      <section className='services' id='services'>
        <div className='services__wrapper '>
          <Title title='Результаты работы фонда' img={logoImg} desc='Максимальная поддержка - Абсолютная открытость - Гарантированная помощь' />

          <ul className='services__content' id='#services'>
            <li className='services__item'>
              <img src={growth} alt="" className='services__img' />
              <p className='services__item_title'>Фокус на результат</p>
              <p className='services__item_text'>Благодаря действиям фонда поддеркжу получили уже более 1000 защитников Родины</p>
            </li>
            <li className='services__item'>
              <img src={communities} alt="" className='services__img' />
              <p className='services__item_title'>В фонде уже более 1500 учасников</p>
              <p className='services__item_text'>Мы народ огромной страны - часть из нас может нуждаться в помощи, часть может помогать. Так мы побеждали во всех войнах, так мы поднимали нашу страну после них, так победим и в этот раз.</p>
              <a href='https://t.me/vpervieruki' target='_blank' className='services__item_hide'>Присоединиться!</a>
            </li>
            <li className='services__item'>
              <img src={hands} alt="svc" className='services__img' />
              <p className='services__item_title'>Проведено более 200 благотворительных поставок</p>
              <p className='services__item_text'>Главным качеством фонда «В первые руки» его команда обозначила открытость. Мы дорожим вашим доверием, для этого публикуем отчеты о всех действиях.</p>
              <a href='https://t.me/vpervieruki' target='_blank' className='services__item_hide'>Посмотреть отчеты!</a>

            </li>
            <li className='services__item'>
              <img src={health} alt="" className='services__img' />
              <p className='services__item_title'>Анонсировали пересылку писем. </p>
              <p className='services__item_text'>Конечно, в первую очередь мы ждем писем от детей, так как наши войны сражаются за их будущее. Однако каждый может написать короткое, но теплое: «Братишка, возвращайся с победой», «Уверен, что еще увижу тебя на параде», «Мой сын, как и вы, сражается за Родину», «Молюсь за вас всех».</p>
              <a href='https://t.me/vpervieruki/170' target='_blank' className='services__item_hide'>Узнать подробнее!</a>
            </li>
            <li className='services__item'>
              <img src={militar} alt="" className='services__img' />
              <p className='services__item_title'>Свой склад</p>
              <p className='services__item_text'>Почти все средства направленны на закупку необходимого бойцам оборудования и снаряжения.  Небольшая часть ушла на создание склада фонда. </p>
              <a href='https://t.me/vpervieruki/179' target='_blank' className='services__item_hide'>Узнать подробнее!</a>
            </li>
            <li className='services__item'>
              <img src={handshake} alt="" className='services__img' />
              <p className='services__item_title'>Полная отчетность</p> 
              <p className='services__item_text'> Опубликованные видео-отчеты наших бойцов из зоны спецоперации вы можете найти в нашей Telegram группе</p>

            </li>
          </ul>
        </div>

      </section>
    </div>

  );
}

export default ServiceMe;
