import React from 'react';
import {Card} from 'react-bootstrap';

function ContactCard()
{
    return (
        <div>
            <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>Find me on:</Card.Title>
                <Card.Link href="https://github.com/ShrutiKatpara">Github</Card.Link>
                <Card.Link href="https://www.linkedin.com/in/shrutikatpara/">LinkedIn</Card.Link>
                <Card.Link href="https://twitter.com/SKatpara">Twitter</Card.Link>
                {/* <Card.Link href="#">LinkedIn</Card.Link> */}
            </Card.Body>
            </Card>
        </div>
        
        );
}

export default ContactCard;