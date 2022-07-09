import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kphw9t9', 'template_47rodus', form.current, 'gq2QDhLvhK7gdR-oL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch </h5>
      <h2>Contact me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>siddharthpla9244@gmail.com</h5>
            <a href="mailto:siddharthpla9244@gmail.com" className='atag' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Siddharth Jain</h5>
            <a href="https://m.me/100036863449592" target="_blank" className='atag'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917303821016</h5>
            <a href="http://api.whatsapp.com/send?phone=917303821016" target="_blank" className='atag'>Send a message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact