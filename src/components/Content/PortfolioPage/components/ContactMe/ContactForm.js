import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useNotification from 'src/hook/useNotification';
import { CONST_VARI } from 'src/utils';

const ContactForm = () => {
  const form = useRef();
  const notification = useNotification();

  const sendEmail = (event) => {
    event.preventDefault(); // prevents the page from reloading when you hit “Send”
    console.log('sendEmail', event);
    emailjs.sendForm('service_38ta3al', 'template_8r6e1lr', form.current, 'Ai3kgW4SAtvRxRs2E').then(
      (result) => {
        // show the user a success message
        console.log('success', result);
        notification({
          type: 'success',
          message: CONST_VARI.NOTIFICATION.success_mail_message
        });
        event.target.reset();
      },
      (error) => {
        // show the user an error
        console.log('fail', error);
        notification({
          type: 'error',
          message: error.text
        });
      }
    );
  };
  return (
    <div className="contactform box-shadow">
      <form onSubmit={sendEmail} ref={form}>
        <input name="sender" required type="text" placeholder="Your Name" />
        <input name="Sender_email" required type="email" placeholder="Your Email" />
        <input name="subject" type="text" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message" />
        <button type="submit" className="cursor-pointer">
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
