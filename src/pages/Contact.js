import React from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import ContactCard from '../components/ContactCard';


function Contact()
{
    return(
        <div style={{paddingTop: 60}}>
            <Container>
                <Row>
                    <Col md={8}>
                        {/* <Form>
                        <Form.Group style={{textAlign: "left", alignSelf: 'stretch'}} controlId="formBasicEmail">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group style={{textAlign: "left", alignSelf: 'stretch'}} controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */}
                        <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="email" placeholder="Enter email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>

                    <Col>
                        <ContactCard/>
                    </Col>
                </Row>
                
            </Container>
            
        </div>
    );
}

export default Contact;