import LayOut from "@/components/LayOut";
import { Button, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import { BsCalendar3, BsEnvelope, BsFillEarFill, BsFillEnvelopeFill, BsGeoAlt, BsTelephone } from "react-icons/bs";

export default function ContactPage(){
    return(
        <LayOut>
            <div className="contact-page">
                <Container>
                    <h2 className="text-center mb-5">Contact</h2>  

                    <iframe
                        className="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                        width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <div>
                        <Row>
                            <Col className="sentamessage">
                            <h3>Send us a message:</h3>
                                <Form className="custom-form contact-form mb-5 mb-lg-0" >
                                    <Form.Group controlId="contact-name" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Full name"
                                        required
                                    />
                                    </Form.Group>

                                    <Form.Group controlId="contact-email" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email address"
                                        required
                                    />
                                    </Form.Group>

                                    <Form.Group controlId="contact-company" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Company"
                                        required
                                    />
                                    </Form.Group>

                                    <Form.Group controlId="contact-message" className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Message"
                                        required
                                    />
                                    </Form.Group>

                                    <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                    <Button type="submit" className="form-control">
                                        Send message
                                    </Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col className="contact">
                                <div className="contact-detail">
                                    <i className=""> <BsGeoAlt /></i>
                                    <span> 46/4 46/4 Ratchanikun, Nai Mueang, Nakhon Ratchasima 30000 </span>
                                </div>
                               
                                <div className="contact-detail">
                                    <i className=""> <BsTelephone /></i>
                                    <span> 099-999-8899 </span>
                                </div>

                                <div className="contact-detail">
                                    <i className=""> <BsEnvelope/></i>
                                    <span> Pilyne25@gmail.com </span>
                                </div>
                                
                               <div className="contact-detail">
                                    <i className=""> <BsCalendar3 /></i>
                                    <span> Open daily from  08.00 to 16.00</span>
                               </div>
                                

                            </Col>
                        </Row>
                    </div>  


                </Container>
            </div>
        </LayOut>
    )

}