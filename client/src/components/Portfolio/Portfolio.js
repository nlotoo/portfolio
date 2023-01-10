
import './portfolio.css'
import { Link } from 'react-router-dom'
// import {portfolio212} from '../../public/portfolio-project-img.jpg'
import portFolio from '../../public/portfolio-project-img.jpg'
import JNcoffee from '../../public/jnCoffee-project-img.jpg'
import petCatalog from '../../public/pet-catalog.jpg'
import coffeeLovers from '../../public/cofferLovers.jpg'

export const Portfoilio = () => {


    return (
        <section id='portfolio' className="portfolio-root-element">

            <h2><p>My Recent Work</p>Portfolio</h2>


            <div className='portfolio-project-elements'>


                <div className='project-element'>
                    <img className='portfolio-image-element' src={JNcoffee} alt="Smiley face" />
                    <p>JN Coffe <br />
                        (Next.js ecommerce app)
                    </p>
                    <Link to="\github.com/nlotoo/ecommerce">view in Github</Link>
                    <Link to="\coffeeshop-swart-three.vercel.app">Live</Link>

                </div>
                <div className='project-element'>
                    <img className='portfolio-image-element' src={portFolio} alt="Smiley face" />
                    <p>My portfolio <br />
                        (ReactJS application)
                    </p>
                    <Link to="\github.com/nlotoo/portfolio">view in Github</Link>
                    <Link to="\portfolio-six-opal-50.vercel.app/">Live</Link>

                </div>


                <div className='project-element'>
                    <img className='portfolio-image-element' src={petCatalog} alt="Smiley face" />
                    <p>Pet Catalog <br />
                        (ReactJS application)<br></br>
                        (Course project)
                    </p>
                    <Link to="\github.com/nlotoo/Pet-HUB-Application">view in Github</Link>
                </div>
                <div className='project-element'>
                    <img className='portfolio-image-element' src={coffeeLovers} alt="Smiley face" />
                    <p>Coffe Lovers<br />
                        ( Angular/TypeScript application)
                        (Course project)
                    </p>
                    <Link to="\github.com/nlotoo/Angular--course-project">view in Github</Link>
                </div>


            </div>

        </section>
    )
}