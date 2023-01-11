import React from 'react';
import AboutPage from '../pages/aboutPage';
import { Route, Routes } from 'react-router-dom';
import Payment from './payment/payment';
import PaymentPage from '../pages/paymentPage';

function Main() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </main>
  );
}

export default Main;
