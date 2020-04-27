import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Slide from "../component/Slide.js";

function Home(){
    return(
        <Container fluid="lg">
            <Row>
                <Col style={{backgroundColor:"blue"}}><Slide></Slide></Col>
            </Row>
        </Container>
    );
}

export default Home;