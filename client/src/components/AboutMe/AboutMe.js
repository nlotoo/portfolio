import './about-me.css'
import { Link } from 'react-router-dom'
import { DiTerminalBadge } from 'react-icons/di'
import { TiSocialGithubCircular } from 'react-icons/ti'
import avatar from '../../public/avatar-pic-680.jpg'
import { useState } from 'react'

export const AboutMe = () => {

    let [readMoreText, setReadMore] = useState('nomore');


    function readMore() {
        console.log('click')
        console.log(readMoreText)

        if (readMoreText === 'nomore') {
            setReadMore('more')
        } else {
            setReadMore('nomore')
        }
    }


    return (


        <div id='about' className='about-me-root-element'>

            <h3 className='section-heading'><p className='heading-paragraph'>Get to know</p> About me</h3>
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
                <p className='about-me-text'>
                    I am a positive, enthusiastic  Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform in this role.
                    I have experience working on SPA and Multi-page more than 10 applications and their back-end here is an example of technologies i used in my previous projects (JS with Express & Mongo, MERN, Next.js & Sanity, Angular with TypeScript & Firebase, PhP & MySQL and etc.) most of them were made for a certain period with criteria and were highly evaluated from my mentors.
                    They were challenging web development projects where i had {readMoreText == 'nomore' ? '...' : ''}
                    <span className={readMoreText}>
                        to ensure all work is optimized across a wide range of platforms.
                        They have  developed my time management skills, problem-solving skills, creativity, attention to detail.
                        Thats why i take my work as a Web Developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry. If you hire me as your Web Developer, I assure you I will fit into your team quickly, I will always put the commercial needs of your business at the forefront of everything I do, and the work I carry out will be consistent to a first-class standard.”
                    </span>

                    <button className='readMore-btn' onClick={readMore}>READ {readMoreText == 'more' ? 'LESS' : 'MORE'}</button>
                </p>

                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nihil?<br /> Reprehenderit dolorum autem ab, facilis, necessitatibus cupiditate officiis eos mollitia corporis<br /> in nostrum. Vitae, tenetur, eaque dolorem sequi molestias atque <br />consequuntur cupiditate animi, quia expedita a mollitia neque possimus maxime.</p> */}
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