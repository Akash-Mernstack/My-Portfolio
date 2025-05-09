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
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2>
                                    Skills
                                </h2>
                                <p>
                                    <strong>HTML</strong> – Structure of web pages <br />
                                    <strong>CSS/TailwindCSS</strong> – Styling and layout of web pages <br />
                                    <strong>JavaScript</strong> – Client-side interactivity and backend logic <br />
                                    <strong>React.js</strong> – UI development with component-based architecture and state management (with Redux) <br />
                                    <strong>Git/GitHub</strong> – Version control and collaboration <br />
                                    <strong>Node.js</strong> – Backend runtime environment for executing JavaScript on the server <br />
                                    <strong>Express.js</strong> – RESTful APIs & middleware for building server-side logic <br />
                                    <strong>MongoDB/SQL</strong> – NoSQL (MongoDB) & SQL (Relational database) data modeling <br />
                                    <strong>Data Fetching with Axios/fetch API</strong> – Efficient data fetching and querying of APIs <br />
                                    <strong>Docker</strong> – Containerized deployment for consistent environments <br />
                                    <strong>CI/CD</strong> – Automated pipelines for Continuous Integration and Continuous Deployment <br />
                                </p>

                                <Carousel responsive={responsive} infinite={true} className='skills-slider' >

                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5> HTML</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt='Image' />
                                        <h5> CSS/TAILWIND  CSS</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5> JAVASCRIPT</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5> REACT.JS(with Redux) </h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt='Image' />
                                        <h5> GIT/GITHUB </h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt='Image' />
                                        <h5> NODE.JS </h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5> EXPRESS.JS </h5>
                                    </div>

                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5>MONGODB/SQL,DB </h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5>DOCKER </h5>
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