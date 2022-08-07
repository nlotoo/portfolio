import './about-me.css'
import { Link } from 'react-router-dom'
import { DiTerminalBadge } from 'react-icons/di'
import { BsFolderCheck } from 'react-icons/bs'
import { TiSocialGithubCircular } from 'react-icons/ti'

export const AboutMe = () => {

    return (
        <div className='about-me-root-element' id='about'>
            <h3 >About me</h3>
            <div className='about-me-elements'>
                <div className='imgs-element'>
                    <img className='img-frame' src='https://www.w3schools.com/w3css/img_avatar3.png' alt='my-avatar' />
                </div>
                <div className='about-me-experience-frame'>
                    <div className='project-info1'>
                        <span className='about-icons-class'><DiTerminalBadge /></span ><br />
                        2.5+ Years working experience <br /> with own projects
                    </div>
                    <div className='project-info2'>
                        <Link  className='github-link-icon' to='\github.com/nlotoo' target="_blank" rel="noopener noreferrer">
                            <TiSocialGithubCircular />
                        </Link><br/>
                        Fully detalis about my projects <br />


                    </div>
                </div>
            </div>
        </div>
    )
}