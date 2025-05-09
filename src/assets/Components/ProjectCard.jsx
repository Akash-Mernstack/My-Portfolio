import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({ title, description, imgUrl }) {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbox'>
                <img src={imgUrl} alt={title} />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard
