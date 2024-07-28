/* eslint-disable react/prop-types */
import React from 'react';
import FaceBookIcon from 'public/Logo/facebook.svg';
import GithubIcon from 'public/Logo/github.svg';
import LinkedinIcon from 'public/Logo/linkedin.svg';
import './ConnectWithMe.scss';

const ConnectWithMe = ({ direction }) => {
  const ListConnectEle = [
    {
      src: GithubIcon,
      alt: 'GithubIcon',
      href: 'https://github.com/nhantran100215'
    },
    {
      src: LinkedinIcon,
      alt: 'LinkedinIcon',
      href: 'https://www.linkedin.com/in/nh%C3%A2n-tr%E1%BA%A7n-vi%E1%BA%BFt-a12a05225/'
    },
    {
      src: FaceBookIcon,
      alt: 'FaceBookIcon',
      href: 'https://www.facebook.com/Nhantran1025/'
    }
  ];
  const ConnectionIcon = ({ Icon, href }) => {
    return (
      <div className="connection">
        <Icon className="connection-icon cursor-pointer" onClick={() => window.open(href)} />
      </div>
    );
  };
  return (
    <div className="ConnectWithMe">
      Find me on:
      <div className={direction === 'horizontal' ? 'ConnectWithMe-horizontal' : ''}>
        {ListConnectEle.map((ele, index) => {
          return (
            <div key={index}>
              <ConnectionIcon Icon={ele.src} alt={ele.alt} href={ele.href} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectWithMe;
