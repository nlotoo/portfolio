import './contact-form.css'
export const ContatctForm = () => {
    
    const SendForm = (e) => {
        e.preventDefault()
        console.log('i send  the form')
    }

    return (<div className='contact-me-form'>
        <form className='contact-form' onSubmit={SendForm}>
            <input placeholder='Your full name'></input>
            <input placeholder='Email'></input>
            <textarea></textarea>
            <button>Send</button>
        </form>
    </div>)
}