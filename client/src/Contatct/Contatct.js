import { TiMail } from 'react-icons/ti'
import './contatct.css'
import { ContatctForm } from './cotact-form/ContactForm'

export const Contatct = () => {



    return (
        <div className='main-root-cotanct-page'>

            <h4 className='heading-contact-page'>Contact Me</h4>
            <div className='contact-page-root'>
                <div className='contact-me-buttons'>
                    <button>
                        <TiMail className='email-icon' /><br/>
                        Email<br/>
                        (nlotoo@gmail.com)
                    </button>
                    <button>Messanger</button>
                    <button>WhatsApp</button>
                </div>
                <ContatctForm />
            </div>
        </div>
    )
}