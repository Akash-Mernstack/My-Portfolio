import React from 'react';
import { Col } from 'react-bootstrap';
import ReadMore from './ReadMore';

function ProjectCard({ title = "Untitled", description = "No description available.", imgUrl = "default-image.jpg" }) {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbox'>
                <img src={imgUrl} alt={title} />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <ReadMore text={description}  />
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard;
