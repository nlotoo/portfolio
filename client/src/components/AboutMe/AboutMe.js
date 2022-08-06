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
                    <div>
                        <span className='about-icons-class'><DiTerminalBadge /></span ><br />
                        <strong>Experience: </strong>  <br />
                        2.5+ Years working <br /> with own projects
                    </div>
                    <div className='project-info'>
                        <span className='about-icons-class' ><BsFolderCheck /></span><br />
                        <strong>Project</strong> <br />
                        Fully detalis about my project in
                        <Link className='github-link-icon' to='\github.com/nlotoo' target="_blank" rel="noopener noreferrer">
                            <TiSocialGithubCircular />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}