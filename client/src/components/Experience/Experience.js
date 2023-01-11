import './experience.css'
import { BiBadgeCheck } from 'react-icons/bi'




export const Experience = () => {

    return (
        <section className="experience-root-element" id='experience'>
            <div className='asd'>

            </div>

            <h2 className='section-heading'><p>What skill i have</p>Experience</h2>


            <div className='experience-skill-frame'>
                <div className='skills-square'>
                    <h5>Fontend Development</h5>
                    <div>
                        <ul>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> HTML</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> CSS</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> JavaScript</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Angular</li>
                        </ul>
                        <ul>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> React</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Next.JS</li>
                            {/* <li><i className='li-icon-class'><BiBadgeCheck /></i> Bootstrap</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> MUI</li> */}
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> PHP</li>

                        </ul>
                    </div>
                </div>
                <div className='skills-square'>
                    <h5>Backend Development</h5>
                    <div>
                        <ul>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Node.js</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Express</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> PHP</li>




                        </ul>
                        <ul>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> MongoDB</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Firebase</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> MySQL</li>

                        </ul>
                    </div>
                </div>
                <div className='skills-square'>
                    <h5>Aditional skills</h5>
                    <div>
                        <ul>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Bootstrap</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> MUI</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Postman</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> NPM</li>




                        </ul>
                        <ul>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Git</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Mocha</li>
                            <li><i className='li-icon-class'><BiBadgeCheck /></i> Chai</li>

                        </ul>
                    </div>
                </div>





            </div>



        </section >
    )
}