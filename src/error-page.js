import React from 'react';
import { useRouteError } from 'react-router-dom';
import './error-page.scss';
import NotFoundImg from 'public/image/404-page-not-found.svg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="prevent-select">
      <div className="header">
        <span className="logo">⚔️V͓̽N͓̽H͓̽A͓̽N͓̽⚔️</span>
        <span className="title">My Portfolio</span>
      </div>
      <div className="content">
        <div className="text">
          <h1>Oops! Page not found</h1>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <NotFoundImg className="background" />
      </div>
    </div>
  );
}
