import React from 'react';
import Title from './title/title';

import logoImg from '../assets/img/army/logo/logo_white.png';
import solderImg from '../assets/img/army/collage/1solder.jpg';

function About() {
  return (
    <div className='m-border-shadow-top'>
      <section id='about' className='about '>
        <div className='about__wrapper white'>

          <Title title='О фонде' img={logoImg} desc='Главное качество - полная открытость' />

          <div className='about__content content'>
            <div className='content__row'>
              <div className='content__item'>
                <p className='content__hide'><span>Создан</span>  инициативной группой граждан Российской Федерации. Да, Россия обеспечивает армию всем необходимым, тем, что проходит по нормам довольствия. Фонд организован группой неравнодушных граждан России, которые уверены в необходимости дать нашим войнам больше. Они на передовой, они идут к победе над возродившимся нацизмом, наша цель поддержать их. Фонд привлекает всех желающих, помогает военнослужащим, в том числе мобилизованным, а также гражданам страны, оказавшимся в сложных жизненных обстоятельствах из-за конфликта. </p>
                <p><span> Сайт</span>  создан фондом как отправная точка для сбора единомышленников для организации помощи военнослужащим, а также сбора их просьб. Мы гарантируем, что она дойдет до адресата. Мы регулярно выкладываем отчеты, вы можете отслеживать движение помощи от склада до тех, кому она оказалась необходима.</p>
                <a href="https://t.me/vpervieruki" target='_blank' className='content__btn'>Узнать больше</a>
              </div>
              <div className='content__img' style={{ backgroundImage: `url(${solderImg})` }} />

            </div>

          </div>
        </div>
      </section>
    </div>

  );
}

export default About;
