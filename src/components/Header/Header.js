import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UnderLineAnimation } from 'src/LibsComponent';
import { CONST_VARI, variables } from 'src/utils';
import { defaultPath } from 'src/Routes/Routes';

const Header = () => {
  const headerCollection = variables.headerCollection;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="wrapWebHeader prevent-select">
      <div className="vitualHeader"></div>
      <div className="webHeader">
        <div
          className="sideLeft"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(defaultPath);
          }}>
          <span>⚔️V͓̽N͓̽H͓̽A͓̽N͓̽⚔️</span>
        </div>
        <div className="sideRight">
          {CONST_VARI.HEADER_LINE.map((element, index) => (
            <UnderLineAnimation
              styles={{
                marginLeft: '20px',
                fontSize: '12px',
                cursor: 'pointer',
                marginRight: '20px'
              }}
              key={index}
              onClick={() => {
                if (location.pathname !== defaultPath) {
                  navigate(defaultPath);
                  setTimeout(() => {
                    const headerRef = headerCollection.getId(element.id);
                    headerRef.scrollIntoView({
                      behavior: 'smooth',
                      block: element.position
                    });
                  }, 1000);
                  return;
                }
                const headerRef = headerCollection.getId(element.id);
                headerRef.scrollIntoView({
                  behavior: 'smooth',
                  block: element.position
                });
              }}>
              {element.text}
            </UnderLineAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
