import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import MailchimpForm from './MailchimpForm'
import logo from './img/logo.svg'
import Navbaricons1 from './img/nav-icon1.svg';
import Navbaricons2 from './img/nav-icon2.svg';
import Navbaricons3 from './img/nav-icon3.svg';




function Footer() {
    return (
        <div>
            <footer className='footer'>
                <Container>
                    <Row className="align-item-center">
                        <MailchimpForm />
                        <Col sm={6}>
                            <img src={logo} alt='Logo' />
                        </Col>
                        <Col sm={6} className='text-center text-sm-end'>
                            <div>
                                <a href=''><img src={Navbaricons1} /></a>
                                <a href=''><img src={Navbaricons2} /></a>
                                <a href=''><img src={Navbaricons3} /></a>
                            </div>
                            <p>&copy; {new Date().getFullYear()}. All rights reserved. Built with ❤️ by Akash Kumar. MERN Stack Developer.</p>

                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer