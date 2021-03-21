import React from 'react';
import {ProgressBar, Container, Row, Col} from 'react-bootstrap';

function Strengths()
{
    return(
        <div>
            <Container md={8}>
                <Row>
                    <Col md={8}><h3 style={{textAlign: "left"}}>Professional Strengths:</h3></Col>
                </Row>
                <Row >
                    <Col md={6}>
                        <h4 style={{textAlign: "left"}}> Languages: </h4>

                        <h4 style={{textAlign: "left"}}>Python</h4>
                        <ProgressBar style={{width: 500}} variant="warning" now={100} />

                        <h4 style={{textAlign: "left"}}>C</h4>
                        <ProgressBar style={{width: 500}} variant="warning" now={80} />

                        <h4 style={{textAlign: "left"}}>Dart</h4>
                        <ProgressBar style={{width: 500}} variant="warning" now={60} />

                        <h4 style={{textAlign: "left"}}>React.js</h4>
                        <ProgressBar style={{width: 500}} variant="warning" now={40} />
                    </Col>

                    <Col md={6}>
                    <h4 style={{textAlign: "left"}}> Technologies and Frameworks: </h4>

                    <h4 style={{textAlign: "left"}}>Flutter</h4>
                    <ProgressBar style={{width: 500}} now={80} />

                    <h4 style={{textAlign: "left"}}>Git</h4>
                    <ProgressBar style={{width: 500}} now={60} />

                    <h4 style={{textAlign: "left"}}>Bash</h4>
                    <ProgressBar style={{width: 500}} now={60} />

                    <h4 style={{textAlign: "left"}}>Flask</h4>
                    <ProgressBar style={{width: 500}} now={60} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Strengths;