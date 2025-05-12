import { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import logo from './img/logo.svg'
import Navbaricons1 from './img/nav-icon1.svg';
import Navbaricons2 from './img/nav-icon2.svg';
import Navbaricons3 from './img/nav-icon3.svg';


import React from 'react'

function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <div>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" ><span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#home" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}> skills</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('project')} > Project</Nav.Link>

                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>

                                <a href='#'><img src={Navbaricons1} alt="icon1" /></a>
                                <a href='#'><img src={Navbaricons2} alt="icon2" /></a>
                                <a href='#'><img src={Navbaricons3} alt="icon3" /></a>

                            </div>
                            <button className='vvd' onClick={() => console.log("connect")}><span>Let's Connect</span> </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar