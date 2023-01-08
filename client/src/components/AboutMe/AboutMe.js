import './about-me.css'
import { Link } from 'react-router-dom'
import { DiTerminalBadge } from 'react-icons/di'
import { TiSocialGithubCircular } from 'react-icons/ti'
import avatar from '../../public/avatar-pic-680.jpg'

export const AboutMe = () => {

    return (


            <div id='about' className='about-me-root-element'>

                <h3><p>Get to know</p> About me</h3>
                <div className='about-me-elements'>
                    <div className='imgs-element'>
                        <img className='img-frame-about' src={avatar} alt='my-avatar' />
                    </div>
                    <div className='about-me-experience-frame'>
                        <div className='project-info1'>
                            <span className='about-icons-class'><DiTerminalBadge /></span ><br />
                            2.5+ Years working experience <br /> with own projects
                        </div>
                        <div className='project-info2'>
                            <Link className='github-link-icon' to='\github.com/nlotoo' target="_blank" rel="noopener noreferrer">
                                <TiSocialGithubCircular />
                            </Link><br />
                            Fully detalis about my projects <br />
                        </div>

                    </div>

                </div>
                <div className='text-paragrph-about-me'>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nihil?<br /> Reprehenderit dolorum autem ab, facilis, necessitatibus cupiditate officiis eos mollitia corporis<br /> in nostrum. Vitae, tenetur, eaque dolorem sequi molestias atque <br />consequuntur cupiditate animi, quia expedita a mollitia neque possimus maxime.</p>
                    </div>
                </div>
                <div className='lets-talk-button'>
                    <div className='home-screen-buttons'>
                        <a href="#contact" >Let`s Talk</a>
                        {/* <Link to='#contact'>Let`s Talk</Link> */}
                    </div>
                </div>
            </div>

    )
}