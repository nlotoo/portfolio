import { Link } from 'react-router-dom';
import './contact.css';

import { TiMail, TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineWhatsApp } from "react-icons/ai";


import { ContatctForm } from './cotact-form/ContactForm';



export const Contact = () => {




    return (
        <section id='contact' className='main-root-cotanct-page'>

            <h4 className='heading-contact-page'>Contact Me</h4>
            <div className='contact-page-root'>
            <ContatctForm />
                <div className='contact-me-a-tag'>
                    <Link to='\mailto:nlotoo93@gmail.com'>
                        <TiMail className='email-icon' /><br />
                        Email<br />
                        (nlotoo93@gmail.com)<br />
                        <strong> Send a message</strong>
                    </Link>
                    <Link to='\/m.me/nlotoo'>
                        <TiSocialFacebook className='email-icon' /><br />
                        Messanger <br />
                        (nlotoo)<br />
                        <strong> Send a message</strong>

                    </Link >
                    <Link to='\/api.whatsapp.com/send?phone=07405608112' target="_blank" rel="noopener noreferrer">

                        <AiOutlineWhatsApp className='email-icon' /> <br />
                        WhatsApp <br />
                        (Yordan Nikolov) <br/>
                        +447405608112 <br />
                    </Link>
                </div>
            </div>
        </section>
    )
}