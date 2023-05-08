import React from 'react';

export function FormUI() {


  return (

    <form className='form' action="" method="post">
      <div className='form__text-items'>
        <input type="text" maxLength={20} autoComplete="off" className="form__text_item" placeholder="First name" />
        <input type="text" maxLength={20} autoComplete="off" className="form__text_item" placeholder="Last name" />
      </div>
      <div className='form__text-items'>
        <input type="text" maxLength={20} autoComplete="off" className="form__text_item" placeholder="Email" />
        <input type="text" maxLength={20} autoComplete="off" className="form__text_item" placeholder="Phone number" />
      </div>

      <textarea name="msg" maxLength={1000} rows={3} className="form__message" placeholder="Message"></textarea>

      <button type="submit" className="form__btn">Send</button>
    </form>

  );
}

