/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Footer.scss';
import { useNavigate } from 'react-router-dom';
import { CONST_VARI, variables } from 'src/utils';

const Footer = () => {
  const navigate = useNavigate();
  const headerCollection = variables.headerCollection;
  return (
    <div className="footer">
      <h3>Let's talk</h3>
      <p>Wanna get in touch or talk about a project?</p>
      <p>
        <span>Feel free to contact me via email at</span>
        <a href={`mailto:${CONST_VARI.MY_INFO.gmail}`} className="button-hover-2-layer">
          {CONST_VARI.MY_INFO.gmail}
        </a>
      </p>
      <p>
        <span>or drop a line in the form at the</span>
        <span
          className="button-hover-2-layer link cursor-pointer"
          onClick={() => {
            let contactLine = CONST_VARI.HEADER_LINE.filter(
              (header) => header.id === 'contactme'
            )[0];
            if (location.pathname !== '/') {
              navigate('/');
              setTimeout(() => {
                const headerRef = headerCollection.getId(contactLine.id);
                headerRef.scrollIntoView({
                  behavior: 'smooth',
                  block: contactLine.position
                });
              }, 1000);
              return;
            }
            const headerRef = headerCollection.getId(contactLine.id);
            headerRef.scrollIntoView({
              behavior: 'smooth',
              block: contactLine.position
            });
          }}>
          contact page
        </span>
      </p>
    </div>
  );
};

export default Footer;
