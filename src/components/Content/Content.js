import React, { useEffect, useRef, useState } from 'react';
import './Content.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { Loading, WelcomeSlash } from 'src/LibsComponent';
import useLoading from 'src/hook/useLoading';
import Notification from '../Notification/Notification';
import { defaultPath } from 'src/Routes/Routes';

const Content = () => {
  const { loading, showLoading } = useLoading();
  const location = useLocation();
  const welcomeSlRef = useRef(null);
  const [createWelcomeSlash, setCreateWelcomeSlash] = useState(false);

  useEffect(() => {
    if (location.pathname === defaultPath && !createWelcomeSlash) {
      setCreateWelcomeSlash(true);
    }
    if (location.pathname !== defaultPath) {
      showLoading({ show: true, timer: 1000 });
    }
  }, [location.pathname]);
  return (
    <div className="content">
      <Outlet />
      {loading.show && <Loading />}
      <Notification />
      {createWelcomeSlash && <WelcomeSlash ref={welcomeSlRef} />}
    </div>
  );
};

export default Content;
