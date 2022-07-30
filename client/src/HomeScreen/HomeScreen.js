// import { me } '../../public/YNpic.jpg'
import './homeScreen.css'
export const HomeScreen = () => {

    return (
        <div className='homeScreen-root-element'>
            <div><img className='framed' src='https://www.w3schools.com/w3css/img_avatar3.png' alt='my-avatar' /></div>
            <div className="heading-txt" >Hello i`m</div>
            <h3 className='my-name'>Yordan Nikolov</h3>
            <div className="heading-txt" >Fullstack Developer</div>
            <div className='home-screen-buttons'>
                <button>Download CV</button>
                <button>Let`s Talk</button>
            </div>
        </div>)

};