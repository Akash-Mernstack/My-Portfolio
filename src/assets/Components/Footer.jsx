import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import logo from './img/logo.svg'
import Navbaricons1 from './img/nav-icon1.svg';
//import Navbaricons2 from './img/nav-icon2.svg';
//import Navbaricons3 from './img/nav-icon3.svg';
import insta from './img/insta.jpg'



function Footer() {
    return (
        <div>
            <footer className='footer'>
                <Container>
                    <Row className="align-item-center">

                        <Col sm={6} className='log'>
                            <img src={logo} alt='Logo' />
                        </Col>
                        <Col sm={3} className='Col'>
                            <span className='navbar-text'>
                                <div className='social-icon'>

                                    <a href='#'><img src={Navbaricons1} alt="icon1"
                                        className='linked'
                                    /></a>
                                    <a href="https://github.com/Akash-Mernstack" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                                            alt="GitHub Icon"
                                            className="github-icon"
                                        />
                                    </a>

                                    <a href="mailto:akv45446@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                                            alt="Gmail Icon"
                                            className="gmail"
                                        />
                                    </a>

                                    <a href="tel:+917466030826   " target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                                            alt="Phone Icon"
                                            className="github-icon"
                                        />
                                    </a>
                                    <a
                                        href="https://wa.me/919999999999"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={insta}
                                            alt="WhatsApp Icon"
                                            className="github-icon"
                                        />
                                    </a>


                                </div>

                            </span>
                            <p>&copy; {new Date().getFullYear()}. All rights reserved. Built with ❤️ by Akash Kumar. MERN Stack Developer.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer