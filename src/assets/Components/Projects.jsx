import React from 'react'
import { Container, TabContainer, TabContent, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import ColorSharp2 from './img/color-sharp2.png'
import projImg1 from './img/project-img1.png'
import projImg2 from './img/project-img2.png'
import projImg3 from './img/project-img3.png'



function Projects() {
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
                            <h2>Projects</h2>
                            <p>lorem 30</p>
                            <TabContainer id='project-tabs' >
                                <Nav variant="pills" defaultActiveKey='/home'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </TabContainer>
                            <Tab.Content>
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
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-right' src={ColorSharp2} />
            </section>
        </div>
    )
}

export default Projects

