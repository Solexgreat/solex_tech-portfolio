import React, { useState } from 'react'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import emailjs from '@emailjs/browser';
import './Footer.scss';
import { useToggle } from '../../context/ToggleProvider';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;


const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  
  const { isOn } = useToggle();

  const handleChangeInput = (e) => {

    const { name, value } = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert('Email service is not configured. Please try again later.');
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      reply_to: email,
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error);
        setLoading(false);
        alert('Failed to send message. Please try again.');
      });
  }


  return (
    <>
      <h2 className={isOn ? 'head-text' : 'head-text dark'}>
        Contact Me To Bring Your Ideas To Life
      </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:SolomonOmisami@gmail.com' className='p-text'>SolomonOmisami@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href='tel: +234 806 278 9756' className='p-text'>+234 806 278 9756</a>
        </div>
      </div>

      {!isFormSubmitted ?
       <form className='app__footer-form app_flex' onSubmit={handleSubmit}>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' name="name" onChange={handleChangeInput} value={name} required />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' name="email" onChange={handleChangeInput} value={email} required />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}
            required
          />
        </div>
        <button type='submit' className='p-text' disabled={loading}> {loading ? 'sending...': 'Send Message'}</button>
        </form> :
        <div>
          <h3 className='head-text'>
            Thank you for getting in touch
          </h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact', "app__whitebg"
);