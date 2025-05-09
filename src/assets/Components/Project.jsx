import React from 'react'
import { Container, Tab, Row, Col, Nav, } from 'react-bootstrap'

import ProjectCard from './ProjectCard'
import ColorSharp2 from './img/color-sharp2.png'
import projImg1 from './img/weatherapp.png'
import projImg2 from './img/todon.png'
import projImg3 from './img/portfolio.png'
import TrackVisibility from 'react-on-screen'


function Project() {
    const Projects = [{
        title: "Weather App",
        description: "Weather Aap: Get instant real-time weather updates and forecasts for anywhere in the world. See current conditions, detailed hourly/daily predictions, crucial rain alerts, and more in an easy-to-use app.",
        imgUrl: projImg1,
    }, {
        title: "Todo-App",
        description: "Boost your productivity with Todo Aap. Create, manage, and complete your tasks efficiently with reminders and progress tracking.",
        imgUrl: projImg2,
    }, {
        title: "Portfolio-App",
        description: "Explore my portfolio to see my work in full-stack web development with a focus on the MERN stack. I'm a MERN stack developer passionate about creating seamless and user-centric web applications and dedicated to delivering impactful and scalable solutions..",
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
                                        <h2>My Projects</h2>
                                        <p>i have worked on several projects with Continuous Learning and updateing my skills</p>
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

