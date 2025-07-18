import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import contactImg from '../assets/contact.png';
import bgImg from '../assets/backgrounds/contactbg.png'; // Background image

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ebqlhdf', 'template_6k0vt3f', form.current, '9czLqyAOz-rOokdHf')
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="contact-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="contact-card">
        <div className="form-section">
          <h2>Contact us</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <FaComment className="icon" />
              <textarea name="message" placeholder="Message" rows="3" required></textarea>
            </div>
            <button type="submit">Send Message</button>
            {sent && <p className="success-text">Message sent successfully!</p>}
          </form>
        </div>
        <div className="illustration-section">
          <img src={contactImg} alt="Contact Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
