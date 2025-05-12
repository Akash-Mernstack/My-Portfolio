import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

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
                                <p>html css and mern</p>
                                <Carousel responsive={responsive} infinite={true} className='skills-slider' >
                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5> Web Developer </h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt='Image' />
                                        <h5> Brand Identity</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt='Image' />
                                        <h5> Logo Design</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter} alt='Image' />
                                        <h5> Logo Design</h5>
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