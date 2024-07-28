/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ConnectWithMe } from 'src/LibsComponent';
import GmailIcon from 'public/Logo/gmail.svg';
import { CONST_VARI } from 'src/utils';
const ContactInfo = () => {
  return (
    <div className="contactInfo box-shadow">
      <h4>Let's talk about everything!</h4>
      <p>
        If you wanna get in touch, talk to me about a project collaboration or just say hi, Send me
        an
        <a href={`mailto:${CONST_VARI.MY_INFO.gmail}`} className="button-hover-2-layer link">
          email
        </a>
        .👋
      </p>
      <ConnectWithMe direction={'horizontal'} />
      <p className="gmailInfo">
        <GmailIcon /> <span>{CONST_VARI.MY_INFO.gmail}</span>
      </p>
    </div>
  );
};

export default ContactInfo;
