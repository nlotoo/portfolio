
import './portfolio.css'
import { Link } from 'react-router-dom'
export const Portfoilio = () => {


    return (
        <section id='portfolio' className="portfolio-root-element">

            <h2><p>My Recent Work</p>Portfolio</h2>

            <div className='portfolio-project-elements'>
                <div className='project-element'>
                    <img className='portfolio-image-element' src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Smiley face" />
                    <p>Pet Catalog <br />
                        (ReactJS application)</p>
                    <Link to="#">view in Github</Link>
                </div>
                <div className='project-element'>
                    <img className='portfolio-image-element' src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Smiley face" />
                    <p>Washup<br/>
                    (Angular application)
                    </p>
                    <Link to="#">view in Github</Link>
                </div>

                <div className='project-element'>
                    <img className='portfolio-image-element' src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Smiley face" />
                    <p>My portfolio <br/>
                        (ReactJS application)
                    </p>
                    <Link to="#">view in Github</Link>

                </div>
            </div>

        </section>
    )
}