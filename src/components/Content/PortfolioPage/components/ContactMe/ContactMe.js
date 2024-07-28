/* eslint-disable react/prop-types */
import React from 'react';
import { Title } from 'src/LibsComponent';
import { variables } from 'src/utils';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './ContactMe.scss';

const ContactMe = ({ title = {} }) => {
  const headerCollection = variables.headerCollection;
  return (
    <div className="contactme">
      <Title
        text={['Contact', 'me?']}
        id={title.id}
        onClick={() => {
          const headerRef = headerCollection.getId(title.id);
          headerRef.scrollIntoView({
            behavior: 'smooth',
            block: title.position
          });
        }}
      />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactMe;
