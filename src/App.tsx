import React from 'react';
import Footer from './components/goods/footer'
import Main from './components/goods/main'
import './App.scss';
import Header from './components/goods/header'

function App() {

  return (
    <div className="wrapper">
      {/* header */}
      <Header />
      {/* main */}
      <Main />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
