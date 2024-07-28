/* eslint-disable react/prop-types */
import React from 'react';
import CloseIcon from 'public/icon/close.svg';
import SuccessIcon from 'public/icon/success.svg';
import ErrorIcon from 'public/icon/error.svg';
import './Notification.scss';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectNotification } from 'src/Redux/reducer/notificationSlice';

const RenderNotification = (noti) => {
  switch (noti.type) {
    case 'success':
      return (
        <div className="notificationsub success" key={noti.id}>
          <div className="wrapText">
            <SuccessIcon className="represent-icon" />
            <span>Success!</span>
            <span>{noti.message}</span>
          </div>
          <CloseIcon className="closeicon cursor-pointer" />
        </div>
      );
    case 'error':
      return (
        <div className="notificationsub error" key={noti.id}>
          <div className="wrapText">
            <ErrorIcon className="represent-icon cursor-pointer" />
            <span>Oops...!</span>
            <span>{noti.message}</span>
          </div>
          <CloseIcon className="closeicon" />
        </div>
      );

    default:
      return <></>;
  }
};

const Notification = () => {
  const listNotifi = useSelector(selectNotification);

  return createPortal(
    <div className="notification">{listNotifi.map((noti) => RenderNotification(noti))}</div>,
    document.body,
    'noti.id'
  );
};

export default Notification;
