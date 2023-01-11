import React from 'react';
import ServiceMe from '../components/service';
import StudyMe from '../components/studyMe';
import Payment from '../components/payment/payment';
import Assist from '../components/assist/assist';

function PaymentPage() {
    return (
    <>
      <Payment />
      <Assist />
    </>
  );
}

export default PaymentPage;
