import React from 'react'
import { useState, useEffect } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import HeaderImg from '../Components/img/header-img.svg'
import { Container, Col, Row } from 'react-bootstrap'

function Banner() {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', "web designer", 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text]);  // ✅ add `delta` to dependency

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(prev => prev + 1)
            setDelta(500)
        }

    }
    return (
        <div>
            <section>
                <Container>
                    <Row className="align-items-center" >
                        <Col xs={12} md={6} xl={7}>
                            <span className='tagline'>Welcome to my  Portfolio</span>
                            <h1>{`Hi i'am webdecoded`}<span className='wrap'>{text}</span></h1>
                            <p>I am a passionate MERN stack developer with experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy turning complex problems into clean, scalable solutions.</p>
                            <button onClick={() => console.log("connect")}>Let's connect <ArrowRightCircle size={25} />
                            </button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={HeaderImg} alt='headerImg' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Banner