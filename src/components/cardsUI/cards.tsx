import React from 'react';
import shipImg from '../../assets/img/ship.jpg';

export function CardOneUI() {


  return (

    <article className="card">
      <div className='card__image' style={{ backgroundImage: `url(${shipImg})` }} ></div>
      <div className="card__body">
        <h3 className="card__title">Заголовок карточки</h3>
        <div className="card__params">
            <span className="card__params-bubble"></span>
            3.4k
            <span className="card__params-news"></span>
            3.4k
            <span className="card__params-picture"></span>
            <time className="card__params-time">22 may 2022 22:22</time>
        </div>
        <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel voluptates voluptate. Temporibus, omnis fugit.</p>
        <span className="card__btn btn">Читать</span>
      </div>
    </article>
  );
}


export function CardV2UI() {


  return (

    <article className="card-v2" style={{ backgroundImage: `url(${shipImg})` }}>
      <div className="card-v2__body">
        <h3 className="card-v2__title">Заголовок карточки</h3>
        <div className="card-v2__params">
            <span className="card-v2__params-bubble"></span>
            3.4k
            <span className="card-v2__params-news"></span>
            3.4k
            <span className="card-v2__params-picture"></span>
            <time className="card-v2__params-time">22 may 2022 22:22</time>
        </div>
      </div>
    </article>
  );
}