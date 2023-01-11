import React from 'react';
import About from '../components/about';
import ContactUs from '../components/contact';
import ServiceMe from '../components/service';
import StudyMe from '../components/studyMe';
import Payment from '../components/payment/payment';
import Preview from '../components/preview/preview';

function AboutPage() {
  return (
    <>
      <Preview />
      <About />
      <Payment />

      <ServiceMe />
      <StudyMe />
      {/* <ContactUs /> */}
    </>
  );
}

export default AboutPage;
