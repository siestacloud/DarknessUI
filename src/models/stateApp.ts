import oneSolder from '../assets/img/army/collage/1solder.jpg';
import oneSolderFront from '../assets/img/army/collage/1solderFront.jpg';

import twoSolders from '../assets/img/army/collage/2solders.jpg';
import treeSolders from '../assets/img/army/collage/3solders.jpg';
import treeSoldersClose from '../assets/img/army/collage/3soldersClose.jpg';
import ammo from '../assets/img/army/ammo.jpg';


import like from '../assets/img/army/collage/like.png';
import favorite from '../assets/img/army/collage/f.png';
import sass from '../assets/img/ico/sass.png';
import js from '../assets/img/ico/js.png';
import ts from '../assets/img/ico/ts.png';
import react from '../assets/img/ico/react.png';

export interface AppState {
  status: string
  error: string
  FrontStudyStages: frontStudy[]
}


export interface frontStudy {
  projectTitle: string
  date: string
  desc: string
  stack: string[]
  preview: string
  sourceUrl: string
}


export const DEF_APP_STATE: AppState = {
  status: '', error: '', FrontStudyStages: [
    {
      projectTitle: 'Мы продолжаем «утеплять» подразделения. ',
      date: 'Декабрь 2022',
      desc: 'Первый день зимы. Пусть там, где идет специальная военная операция, она еще не вступила в полные права, но теплыми дни уже не назовешь. Мы же продолжаем «утеплять» подразделения. Мотострелкам переданы печки и теплые носки. 💬«Личный состав получил необходимые в зимнее холодное время печки для обогрева и теплые носки. Хотим сказать вам спасибо»',
      stack: [like, favorite],
      preview: oneSolder,
      sourceUrl: 'https://t.me/vpervieruki/189'
    },
    {
      projectTitle: 'Поддержка разведчиков',
      date: 'Декабрь 2022',
      desc: 'В фонд обратились разведчики, оказались в сложной ситуации — не хватает электричества запитать и зарядить. Два генератора, которые ранее передали на склад фонда, прибыли к ним на передовую. 💬«Благодарим вас за участие в нашей общей победе!»',
      stack: [like, favorite],
      preview: twoSolders,
      sourceUrl: 'https://t.me/vpervieruki/203'
    },
    {
      projectTitle: 'Поддержка морпехов!',
      date: 'Ноябрь 2022',
      desc: 'В среду в фонд пришла весточка от морпехов. Разведчики получили серьезное спутниковое оборудование, которое усилит их технические возможности. 💬«Спасибо, что вы нас не забываете и всячески нам помогаете. Мы это очень ценим. Мы чувствуем вашу поддержку на линии фронта».',
      stack: [like, favorite],
      preview: treeSolders,
      sourceUrl: 'https://t.me/vpervieruki/188'
    },
    {
      projectTitle: 'Организована доставка помощи сразу в два подразделения.',
      date: 'Ноябрь 2022',
      desc: '1️⃣Собранные через фонд вещи, а именно, генераторы, тепловые пушки, рулоны пленки для гидроизоляции окопов (сейчас крайне нужная вещь) и еще много всего дошли до разведчиков 80-го гвардейского танкового полка. 💬«Вы помогаете нам приближать победу»',
      stack: [like, favorite],
      preview: treeSoldersClose,
      sourceUrl: 'https://t.me/vpervieruki/176'
    },
    {
      projectTitle: 'Поддержка комендантской роты',
      date: 'Ноябрь 2022',
      desc: 'Фронтовыми дорогами прямо на передовую. Военнослужащие комендантской роты получили собранный родственниками груз, фонд также принял в этом участие. Путь был сложный, но все получилось. 💬«Мы скоро вернемся, вернемся с победой. Спасибо деткам за письма. Все будет у нас хорошо»',
      stack: [like, favorite],
      preview: oneSolderFront,
      sourceUrl: 'https://t.me/vpervieruki/142'
    },

  ]
}


