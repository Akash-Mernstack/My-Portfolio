import { useState, useEffect } from "react"
import { Alert, Row, Col } from "react-bootstrap"

const Newsletter = ({ onvalidated, status, message }) => {

    const [email, setEmail] = useState('')
    useEffect(() => {
        if (status === "success") clearFields()
    }, [status]);
    const handlerSubmit = (e) => {
        e.preventDefault()
        email.indexOf("@") > -1 &&
            onvalidated({
                EMAIL: email
            })
    }
    const clearFields = () => {
        setEmail("")
    }



    return (
        <Col lg={12}>
            <div className="newsletter-bx ">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>subscribe to our Newletter</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant='danger'>{message}</Alert>}
                        {status === "success" && <Alert variant='success'>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handlerSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>



    )
}
export default Newsletter;
