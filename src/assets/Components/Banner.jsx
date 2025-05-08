import React, { useState, useEffect } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import HeaderImg from '../Components/img/header-img.svg'
import { Container, Col, Row } from 'react-bootstrap'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['MERN Stack Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick()
        }, delta)

        return () => clearTimeout(ticker)
    }, [text, delta])

    const tick = () => {
        const i = loopNum % toRotate.length
        const fullText = toRotate[i]
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum((prevLoopNum) => prevLoopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <span className='tagline'>Welcome to my Portfolio</span>
                                    <h1>
                                        {`Hi, I'm Akash Kumar `}
                                        <span className='wrap'>{text}<span className="cursor">|</span></span>
                                    </h1>
                                    <p>
                                        I am a passionate MERN stack developer with experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy turning complex problems into clean, scalable solutions.
                                    </p>
                                    <button onClick={() => console.log('connect')}>
                                        Let's connect <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='headerImg' />
                    </Col>
                </Row>
            </Container>

            {/* Add blinking cursor style */}

        </section>
    )
}

export default Banner
