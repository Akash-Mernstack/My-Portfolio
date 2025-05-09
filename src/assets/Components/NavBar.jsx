import { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import logo from './img/logo.svg'
import Navbaricons1 from './img/nav-icon1.svg';
//import Navbaricons3 from './img/nav-icon3.svg';


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


                            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}> skills</Nav.Link>
                            <Nav.Link href="#project" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('project')} > Project</Nav.Link>

                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>

                                <a href='#'><img src={Navbaricons1} alt="icon1" /></a>
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
                                        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                                        alt="WhatsApp Icon"
                                        className="github-icon"
                                    />
                                </a>


                            </div>
                            <a href='tel:7466030826'>
                            <button className='vvd' onClick={() => console.log("connect")}><span>Let's Connect</span> </button>
                            </a>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar