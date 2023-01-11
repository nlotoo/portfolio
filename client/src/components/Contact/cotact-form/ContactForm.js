import './contact-form.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const ContatctForm = () => {

    const form = useRef();
    const notify = () => toast.success('You send an email to Yordan Nikolov', {
        duration: 4000,
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hnrbu7e', 'template_67bv6wt', form.current, 'JEQuSFBuDyfGROJXP')
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
            <button onClick={notify}>Send</button>
            <Toaster />
        </form>
    </div>)
}