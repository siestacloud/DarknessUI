import React from 'react';
import logoImg from '../assets/img/army/logo/logo.png';
import Title from './title/title';
function ContactUs() {
  return (
    <section className='contact'>
      <div className='contact__wrapper ' id='contact'>
        <Title title='Мы на связи' img={logoImg} desc='Вступайте в наши ряды! Отправьте заявку и мы обязательно свяжемся с вами.' />

        <form className='contact__form' action="" method="post">
          <div className='contact__text_items'>
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="First name" />
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="Last name" />
          </div>
          <div className='contact__text_items'>
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="Email" />
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="Phone number" />
          </div>

          <textarea name="msg" maxLength={1000} rows={3} className="contact__message" placeholder="Message"></textarea>

          <button type="submit" className="contact__btn">Send</button>
        </form>
      </div>
    </section>
  );
}
export default ContactUs;

