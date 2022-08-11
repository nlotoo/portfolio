import './contact-form.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContatctForm = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hnrbu7e', 'template_wb73qt6', form.current, 'iOJVDuyDZk3gqt1zo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  
    


    return (<div className='contact-me-form'>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <input placeholder='Your full name' name="name"></input>
            <input placeholder='Email' name='email'></input>
            <textarea name='message' ></textarea>
            <button>Send</button>
        </form>
    </div>)
}