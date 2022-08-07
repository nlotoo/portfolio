import './experience.css'
import { BiBadgeCheck } from 'react-icons/bi'

export const Experience = () => {

    return (
        <section className="experience-root-element" id='experience'>
            <h2><p>What skill i have</p>Experience</h2>


            <div className='experience-skill-frame'>
                <div className='front-end-skills'>
                    <h5>Fontend Development</h5>
                    <ul>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> HTML</li>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> CSS</li>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> JavaScript</li>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> React</li>



                    </ul>
                    <ul>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> Angular</li>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> Bootstrap</li>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> MUI</li>
                        <li><i className='li-icon-class'><BiBadgeCheck /></i> Adobe Photoshop</li>

                    </ul>
                </div>
                <div className='back-end-skills'>
                    <h5>Backend Development</h5>

                </div>

            </div>
        </section >
    )
}