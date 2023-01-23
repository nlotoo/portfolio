import './experience.css'
import { BiBadgeCheck } from 'react-icons/bi'
import reactSt from '../../public/certificates/reactSt.jpg'
import AngularJS from '../../public/certificates/AngularJS.jpg'
import HonorableMention from '../../public/certificates/HonorableMention.jpg'
import HTMLandCSS from '../../public/certificates/HTMLandCSS.jpg'
import JsAdvanced from '../../public/certificates/JsAdvanced.jpg'
import JSApplications from '../../public/certificates/JSApplications.jpg'
import JsBackEnd from '../../public/certificates/JsBackEnd.jpg'
import JsFundamentals from '../../public/certificates/JsFundamentals.jpg'

import { Link } from 'react-router-dom'
import useWindowDimensions from '../services/windowsDemensions'
import { useState } from 'react'


export const Experience = () => {

    const { height, width } = useWindowDimensions();

    let [showMore, setShowMore] = useState('hideCertificates')

    function showCertificate() {

        if (showMore == 'hideCertificates') {
            setShowMore('showCertificates')
        } else {
            setShowMore('hideCertificates')
        }

    }

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
            <div className='certificate-container'>
                <h2 className='cetificate-heading'>Certificates</h2>
                <ul className='cetificate-tray'>
                    <li className={width > 500 ? 'showCertificates' : showMore}><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/85395/7963ad25'><img className='certificate' src={HonorableMention} alt='serticate-react'></img></Link></div></li>
                    <li className={width > 500 ? 'showCertificates' : showMore}><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/96778/97691043'><img className='certificate' src={JsFundamentals} alt='serticate-react'></img></Link></div></li>
                    <li className={width > 500 ? 'showCertificates' : showMore}><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/98324/910d7d01'><img className='certificate' src={JsAdvanced} alt='serticate-react'></img></Link></div></li>
                    <li ><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/102393/e7ab6299'><img className='certificate' src={JSApplications} alt='serticate-react'></img></Link></div></li>
                    <li><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/108981/533e06d5'><img className='certificate' src={JsBackEnd} alt='serticate-react'></img></Link></div></li>
                    <li><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/147278/c4eb4c7b'><img className='certificate' src={HTMLandCSS} alt='serticate-react'></img></Link></div></li>
                    <li><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/152915/29f71e9b'><img className='certificate' src={AngularJS} alt='serticate-react'></img></Link></div></li>
                    <li><div className='certificate-box'><Link target="_blank" to='\softuni.bg/certificates/details/140749/2b013d3f'><img className='certificate' src={reactSt} alt='serticate-react'></img></Link></div></li>
                </ul>
                {width < 425 && <button className='btn-certificate' onClick={showCertificate}>Show {showMore == 'showCertificates' ? 'Less' : 'More'}</button>}
            </div>
        </section >
    )
}