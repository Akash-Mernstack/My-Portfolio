import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import meter from './img/meter1.svg'
import meter2 from './img/meter2.svg'
import meter3 from './img/meter3.svg'
import Colorsharp from './img/color-sharp.png'



function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 300, min: 200 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <div>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>

                                <section class="skills-section">
                                    <h2>Skills</h2>
                                    <ul class="skills-list">
                                        <li><strong>HTML</strong> – Structure of web pages</li>
                                        <li><strong>CSS/TailwindCSS</strong> – Styling and layout of web pages</li>
                                        <li><strong>JavaScript</strong> – Client-side interactivity and backend logic</li>
                                       <li><strong>React.js</strong> – UI development with component-based architecture, state management, and hooks (with Redux)</li>

                                        <li><strong>Git/GitHub</strong> – Version control and collaboration</li>
                                        <li><strong>Node.js</strong> – Backend runtime environment for executing JavaScript on the server</li>
                                        <li><strong>Express.js</strong> – RESTful APIs & middleware for building server-side logic</li>
                                        <li><strong>MongoDB/SQL</strong> – NoSQL (MongoDB) & SQL (Relational database) data modeling</li>
                                        <li><strong>Data Fetching with Axios/fetch API</strong> – Efficient data fetching and querying of APIs</li>
                                        <li><strong>Docker</strong> – Containerized deployment for consistent environments</li>
                                    </ul>
                                </section>

                                <Carousel responsive={responsive} infinite={true} className='skills-slider' >
                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5> Frontend</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt='Image' />
                                        <h5> Backend</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <img className='background-image-left' src={Colorsharp} />
        </div>
    )
}

export default Skills