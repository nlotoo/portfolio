import { TiMail, TiSocialFacebook } from 'react-icons/ti'
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './contatct.css'
import { ContatctForm } from './cotact-form/ContactForm'

export const Contatct = () => {



    return (
        <div className='main-root-cotanct-page'>

            <h4 className='heading-contact-page'>Contact Me</h4>
            <div className='contact-page-root'>
                <div className='contact-me-a-tag'>
                    <Link to='#'>
                        <TiMail className='email-icon' /><br />
                        Email<br />
                        (nlotoo93@gmail.com)<br />

                        <strong> Send a message</strong>
                    </Link>
                    <Link to='#'>
                        <TiSocialFacebook className='email-icon' /><br />
                        Messanger <br />
                        (nlotoo)<br />
                        <strong> Send a message</strong>

                    </Link >
                    <Link to='\web.whatsapp.com/' target="_blank" rel="noopener noreferrer">

                        <AiOutlineWhatsApp className='email-icon' /> <br />
                        WhatsApp <br />
                        +447405608112 <br />
                    </Link>
                </div>
                <ContatctForm />
            </div>
        </div>
    )
}