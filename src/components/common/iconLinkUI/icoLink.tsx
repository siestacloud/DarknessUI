import React from 'react';

import vkontakte from '../../../assets/img/ico/vkontakte.png';
import instagram from '../../../assets/img/ico/instagram.png';
import telegram from '../../../assets/img/ico/telegram.png';
import gitlab from '../../../assets/img/ico/gitlab.png';
import github from '../../../assets/img/ico/github.png';



export function IconLinkUI() {


  return (

    <article className="sci">
      <ul className='sci__wrapper'>
        <li ><img className='sci__link' src={gitlab} alt="" /></li>
        <li ><img className='sci__link' src={instagram} alt="" /></li>
        <li ><img className='sci__link' src={telegram} alt="" /></li>
        <li ><img className='sci__link' src={vkontakte} alt="" /></li>
        <li ><img className='sci__link' src={github} alt="" /></li>
      </ul>
    </article>
  );
}
