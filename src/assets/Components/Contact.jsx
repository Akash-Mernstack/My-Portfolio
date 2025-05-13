import { useState } from 'react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Contactimg from './img/contact-img.svg'





function Contact() {
    const fromInitialDetails = {
        firstName: "",
        lastName: '',
        email: "",
        phone: "",
        message: "",
    }

    const [fromDetails, setFromDetails] = useState(fromInitialDetails)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFromDetails({
            ...fromDetails,
            [category]: value
        })
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sent');
        let response = await fetch('https://localhost:3000/contact', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8", // ✅ Fixed spelling
            },
            body: JSON.stringify(fromDetails),
        });
        setButtonText("Sent");
        let result = await response.json();
        setFromDetails(fromInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    }

    return (
        <div>
            <section className='contact' id="connect">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <img src={Contactimg} alt='Contact Us' />
                        </Col>
                        <Col>
                            <h2>Get In Touch</h2>
                            <form onSubmit={handlerSubmit}>
                                <Row>
                                    <Col sm={6} className='px-1'>
                                        <input type='text' value={fromDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)}>
                                        </input>
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type='text' value={fromDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)}>
                                        </input>
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type='email' value={fromDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)}>
                                        </input>
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input type='tel' value={fromDetails.phone} placeholder='Phone No.' onChange={(e) => onFormUpdate('phone', e.target.value)}>
                                        </input>
                                    </Col>
                                    <Col>
                                        <textarea rows='2' value={fromDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}>
                                        </textarea>
                                        <button type='submit' className='submit'><span>{buttonText}</span></button>
                                        {
                                            status.message &&
                                            <Col>
                                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                            </Col>
                                        }
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}


export default Contact