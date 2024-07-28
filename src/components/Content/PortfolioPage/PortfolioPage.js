import { CONST_VARI } from 'src/utils';
import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
// import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';

const PortfolioPage = () => {
  const HEADER_LINE = CONST_VARI.HEADER_LINE;
  return (
    <>
      <AboutMe title={HEADER_LINE.filter((ele) => ele.id === 'aboutme')[0]} />
      <Projects title={HEADER_LINE.filter((ele) => ele.id === 'projects')[0]} />
      {/* <Skills title={HEADER_LINE.filter((ele) => ele.id === 'skills')[0]} /> */}
      <ContactMe title={HEADER_LINE.filter((ele) => ele.id === 'contactme')[0]} />
    </>
  );
};

export default PortfolioPage;
