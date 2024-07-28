/* eslint-disable react/prop-types */
import React from 'react';
import { Title, TypingTextAnimation } from 'src/LibsComponent';
import Avatar from 'public/avatar.jpg';
import './aboutme.scss';
import { CONST_VARI, variables } from 'src/utils';
import { ConnectWithMe } from 'src/LibsComponent';

const AboutMe = ({ title }) => {
  const headerCollection = variables.headerCollection;
  return (
    <div className="aboutme prevent-select">
      <img src={Avatar} alt="avatar" className="avatar" />
      <Title
        text={['Who', 'AmI?']}
        id={title.id}
        onClick={() => {
          const headerRef = headerCollection.getId(title.id);
          headerRef.scrollIntoView({
            behavior: 'smooth',
            block: title.position
          });
        }}
      />
      <TypingTextAnimation content={CONST_VARI.INTRO_MYSELF} height={190} />
      <ConnectWithMe direction="horizontal" />
    </div>
  );
};

export default AboutMe;
