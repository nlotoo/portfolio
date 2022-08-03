import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import './homeScreen.css'
import CV from '../../public/CV_Yordan_Nikolov.doc'

export const HomeScreen = () => {




    return (
        <section id='home' className='homeScreen-root-element'>
            <div><img className='img-frame' src='https://www.w3schools.com/w3css/img_avatar3.png' alt='my-avatar' /></div>
            <div className="heading-txt" >Hello i`m</div>
            <h3 className='my-name'>Yordan Nikolov</h3>
            <div className="heading-txt" >Fullstack Developer</div>
            <div className='home-screen-buttons'>

                <Link to={CV} target="_blank" rel="noopener noreferrer" download>Download CV</Link>
                <a href="#contact" >Let`s Talk</a>
                {/* <Link to='#contact'>Let`s Talk</Link> */}
            </div>
            <div className="home-screen-social-media-icon" >
                <div>
                    <Link to='\github.com/nlotoo' target="_blank" rel="noopener noreferrer">
                        <TiSocialGithubCircular />
                    </Link>
                </div>
                <div>
                    <Link to='\www.linkedin.com/in/yordan-nikolov-84b98a1a9/' target="_blank" rel="noopener noreferrer">
                        <TiSocialLinkedinCircular />
                    </Link>
                </div>
                <div>
                    <Link to='\www.facebook.com/nlotoo93/' target="_blank" rel="noopener noreferrer">
                        <TiSocialFacebookCircular />
                    </Link>
                </div>
            </div>
            <div className="home-screen-scroll-down">
                <div>Scroll Down</div>
            </div>

        </section>
    )

};