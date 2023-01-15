import f01 from '../assets/img/collageUI/01.jpg';
import f02 from '../assets/img/collageUI/02.jpg';
import f03 from '../assets/img/collageUI/03.jpg';
import f04 from '../assets/img/collageUI/04.jpg';


import html from '../assets/img/ico/html.png';
import css from '../assets/img/ico/css-3.png';
import sass from '../assets/img/ico/sass.png';
import js from '../assets/img/ico/js.png';
// import ts from '../assets/img/ico/ts.png';
// import react from '../assets/img/ico/react.png';

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
      projectTitle: 'Phone Application',
      date: 'may 2022',
      desc: 'little layout for download page',
      stack: [html, css],
      preview: f01,
      sourceUrl: 'empty'
    }, 
    {
      projectTitle: 'Minimal Blog',
      date: ' may 2022',
      desc: 'layout for Skill Factory module task',
      stack: [html, css],
      preview: f02,
      sourceUrl: 'https://github.com/siestacloud/minimal-blog'
    }, 
    {
      projectTitle: 'Design Studio',
      date: 'june 2022',
      desc: 'layout for Skill Factory module task',
      stack: [html, css, sass, js],
      preview: f03,
      sourceUrl: 'https://github.com/siestacloud/DesignStudio-front'
    },
    {
      projectTitle: 'Custom one-page site template',
      date: 'september 2022',
      desc: 'implemented the application design using SASS/SCSS preprocessor  ',
      stack: [html, css, sass, js],
      preview: f04,
      sourceUrl: ''
    },
    
    
  ]
}
