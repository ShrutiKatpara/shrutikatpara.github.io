import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PlaceCard from '../components/PlaceCard';

// function Projects () {
    
//     return (
//         <ol>
//             <li>
//                 <a href="" target="_blank"> Concurrent Web Crawler </a>
//             </li>
//             <li>
//                 <a href="" target="_blank"> Basic Shell in C </a>
//             </li>
//             <li>
//                 <a href="" target="_blank"> Inffecto - covid safety app </a>
//             </li>
//             <li>
//                 <a href="" target="_blank"> Mini Tweet </a>
//             </li>
//         </ol>
//     );
// }


// var [webcrawler, shell, tweet] = [
//     {
//         title: "Concurrent Web crawler",
//         desc: "",
//         link: "",
//         skills: ["C", "Makefile", "C++", "git", "python", "matplotlib"]
//     },
//     {
//         title: "Basic Shell in C",
//         desc: "",
//         link: "",
//         skills: ["C", "Makefile", "git"]
//     },
//     {
//         title: "Mini Tweet",
//         desc: "",
//         link: "",
//         skills: ["Python", "Socket programming"]
//     },
// ];

function Projects({webcrawler, }) {
    return(
        <div>
        <Container>
            <Row className="show-grid spacing">
                <Col md={4} > <PlaceCard title="Concurrent Web crawler" link="https://github.com/ShrutiKatpara/Web-Crawler"/> </Col>
                <Col md={{ offset: 1 }}> <PlaceCard title="Basic Shell in C" link="https://github.com/ShrutiKatpara/Basic-Shell-in-C"/> </Col>
                <Col md={{offset: 1 }}> <PlaceCard title="ComicBot: Chatbot generating joke matching with GIF" link="https://github.com/ShrutiKatpara/Basic-Shell-in-C"/> </Col>
            </Row>
            <Row className="show-grid spacing">
                <Col md={4}> <PlaceCard title="Mini Tweet" link="https://github.com/ShrutiKatpara/Mini-Tweet"/> </Col>
                <Col md={{offset: 1}}> <PlaceCard title="Inffecto- Covid safety app" link="https://github.com/ShrutiKatpara/inffecto"/> </Col>
                <Col md={{offset: 1}}> <PlaceCard title="Minesweeper Game played by AI" link="https://github.com/ShrutiKatpara/Minesweeper-Game"/> </Col>
            </Row>
            
        </Container>
        
        <div style={{paddingTop: 50}} >
            See more of my projects on <a href="https://github.com/ShrutiKatpara" >Github</a>
        </div>
        </div>
    );
}

export default Projects