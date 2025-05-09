import React from 'react'
import { Container, Tab, Row, Col, Nav, } from 'react-bootstrap'

import ProjectCard from './ProjectCard'
import ColorSharp2 from './img/color-sharp2.png'
import projImg1 from './img/project-img1.png'
import projImg2 from './img/project-img2.png'
import projImg3 from './img/project-img3.png'
import TrackVisibility from 'react-on-screen'


function Project() {
    const Projects = [{
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    }, {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
    }, {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    }]

    return (
        <div>
            <section className='project' id='project'>
                <Container>
                    <Row>
                        <Col>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                                        <h2>Projects</h2>
                                        <p>lorem 30</p>
                                    </div>
                                )}
                            </TrackVisibility>
                            <Tab.Container id='project-tabs' defaultActiveKey="first"> 
                                <Nav variant="pills" >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className='project-tab'>
                                    <Tab.Pane eventKey='first'>
                                        <Row>
                                            {
                                                Projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">lorem </Tab.Pane>
                                    <Tab.Pane eventKey="third">lorem </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-right' src={ColorSharp2} />
            </section>
        </div>
    )
}
export default Project

