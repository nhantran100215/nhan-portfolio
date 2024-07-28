import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';

const WebContent = () => {
  return (
    <div className="webcontent">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default WebContent;
